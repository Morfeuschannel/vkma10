import {React, useState} from 'react';
import Locations from '../components/Locations';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, PanelHeaderBack } from '@vkontakte/vkui';

const Locs = ({ id, go, locations }) => {

    return (
        <Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to='home' />}>
                Список Локаций
            </PanelHeader>
			<Group>
				<Div>
					<Locations go={go} locations={locations} />
				</Div>
			</Group>
		</Panel>
    )
}

export default Locs