import {React, useState, useEffect} from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3001');

import styles from './home.module.scss'

import { Panel, PanelHeader, Button, Group, Div } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => {

	const [message, setMessage] = useState('')

	const sendMessage = () => {
		socket.emit('send_message', {message: message})
	}

	useEffect(() => {
		socket.on('receive_message', data => {
			alert(data.message)
		})
	})

    return (
        <Panel id={id}>
			<PanelHeader>Находчивый шпион</PanelHeader>
			<Group>
				<Div>
					<input value={message} onChange={(event) => setMessage(event.target.value)} placeholder='сообщение...' />
					<button onClick={sendMessage}>Отправить сообщение</button>
					<Button 
						size='m' 
						stretched
						className={styles.btn}
						onClick={go}
						data-to='new'
					>
						Новая игра
					</Button>
					<Button 
						className={styles.btn}
						mode='secondary'
						size='m' 
						stretched
						onClick={go}
						data-to='locs'
					>
						Список локаций
					</Button>
				</Div>
			</Group>
		</Panel>
    )
}

export default Home