import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Locs from './panels/Locs';
import New from './panels/New';
import Game from './panels/Game';
import Timer from './panels/Timer';

import Pirate from './img/pirate.jpg'
import Zinger from './img/zinger.jpg'
import Ostankino from './img/ostankino.jpg'
import Subway from './img/metro.jpg'
import NewLocation from './panels/NewLocation';

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [players, setPlayers] = useState(null);
	const [mafia, setMafia] = useState(null);

	const [locations, setLocations] = useState([
        {
            img: Pirate,
            location: 'Пиратский корабль',
            role: ['Юнга', 'Пленный', 'Попугай на плече', 'Боцман', 'Капитан', 'Плотник']
        },
        {
            img: Zinger,
            location: 'Офис ВКонтакте',
            role: ['Менеджер', 'Тимлид', 'Тестировщик', 'Разработчик', 'Сис админ', 'Уборщик']
        },
        {
            img: Ostankino,
            location: 'Останкино',
            role: ['Директор', 'Репортёр', 'Журналист', 'Оператор', 'Телезвезда', 'Метеоролог']
        },
        {
            img: Subway,
            location: 'Метро',
            role: ['Слесарь', 'Электромонтажник', 'Начальник смены', 'Прораб', 'Машинист', 'Инженер']
        },
    ])

	useEffect(() => {
		bridge.send("VKWebAppInit");
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		if (e.currentTarget.dataset.mafia) {
			setMafia(e.currentTarget.dataset.mafia)
		}
	};

	const play = e => {
		setPlayers(JSON.parse(e.currentTarget.dataset.users))
		setActivePanel(e.currentTarget.dataset.to)
	}

	const setLoc = e => {
		let newData = JSON.parse(e)
		setLocations([newData, ...locations])
	}

	const flash = () => {
		bridge.send("VKWebAppFlashSetLevel", {"level": 1});
        setTimeout(() => {bridge.send("VKWebAppFlashSetLevel", {"level": 0});}, 1000);
        setTimeout(() => {bridge.send("VKWebAppFlashSetLevel", {"level": 1});}, 2000);
        setTimeout(() => {bridge.send("VKWebAppFlashSetLevel", {"level": 0});}, 3000);
        setTimeout(() => {bridge.send("VKWebAppFlashSetLevel", {"level": 1});}, 4000);
        setTimeout(() => {bridge.send("VKWebAppFlashSetLevel", {"level": 0});}, 5000);
	}

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Locs id='locs' locations={locations} setLocations={setLocations} go={go} />
								<New id='new' go={go} play={play} />
								<Game id='game' go={go} locations={locations} players={players} />
								<Timer id='timer' mafia={mafia} bridge={bridge} go={go} flash={flash} players={players} />
								<NewLocation id='newLocation' go={go} locations={locations} setLoc={setLoc} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
