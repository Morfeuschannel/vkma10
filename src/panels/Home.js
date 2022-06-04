import {React, useState} from 'react';
import PropTypes from 'prop-types';
import Locations from '../components/Locations';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => {

    return (
        <Panel id={id}>
			<PanelHeader>Находчивый шпион</PanelHeader>
			<Group>
				<Header>Список локаций</Header>
				<Div>
					<Locations />
				</Div>
			</Group>
		</Panel>
    )
}

export default Home