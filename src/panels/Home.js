import {React, useState, useEffect} from 'react';

import styles from './home.module.scss'

import { Panel, PanelHeader, Button, Group, Div } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => {

    return (
        <Panel id={id}>
			<PanelHeader>Находчивый шпион</PanelHeader>
			<Group>
				<Div>
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