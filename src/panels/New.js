import React, { useState } from 'react'

import styles from './new.module.scss'

import { Panel, PanelHeader, PanelHeaderBack, Div, FormItem, Input, Button, Group, Header } from '@vkontakte/vkui'

const New = ({id, go, play}) => {

    const [users, setUsers] = useState([''])

    function changeHandler(i, event) {
        setUsers([...users.slice(0, i), event.target.value, ...users.slice(i+1)]);
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='home' />}>
                Новая игра
            </PanelHeader>
            <Group>
                <Header>Введите имена игроков</Header>
                {
                    users
                    ?
                    users.map((user, i) => 
                    <FormItem key={i}>
                        <Input placeholder='Олег' value={user} onInput={(event) => changeHandler(i, event)} />
                    </FormItem>
                    )
                    :
                    null
                }
                <Div>
                    <Button
                        size='m'
                        mode='secondary'
                        stretched
                        onClick={() => setUsers([...users, ''])}
                    >Добавить игрока</Button>
                </Div>
            </Group>
            <Div>
                <Button
                    stretched
                    size='m'
                    data-users={JSON.stringify(users)}
                    data-to='game'
                    onClick={play}
                >Начать игру</Button>
            </Div>
        </Panel>
    )
}

export default New