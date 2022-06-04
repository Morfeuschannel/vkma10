import React, {useState} from 'react'

import { Panel, PanelHeader, PanelHeaderBack, FormItem, Input, Group, Header, Button, Div, File } from '@vkontakte/vkui'
import { Icon24Document } from '@vkontakte/icons';

const NewLocation = ({id, go, locations, setLoc}) => {

    const [roles, setRoles] = useState(['']);
    const [header, setHeader] = useState('');
    const [file, setFile] = useState(null);

    function changeHandler(i, event) {
        setRoles([...roles.slice(0, i), event.target.value, ...roles.slice(i+1)]);
    }

    function changeImg(event) {
        let objectUrl = URL.createObjectURL(event.target.files[0])
        console.log(objectUrl)
        setFile(objectUrl)
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='locs' />}>Новая локация</PanelHeader>
            <Header>Основное</Header>
            <Group>
                <FormItem top='Название локации'>
                    <Input placeholder='Необитаемый остров' value={header} onChange={(event) => setHeader(event.target.value)} />
                </FormItem>
                <FormItem top="Обложка">
                    <File before={<Icon24Document />} controlSize="m" mode="secondary" onChange={(event) => changeImg(event)}/>
                    {
                        file
                        ?
                        <img style={{
                            width: '100%',
                            height: '280px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginTop: '16px'
                        }} src={file}/>
                        :
                        null
                    }
                </FormItem>
            </Group>
            <Group>
                <Header>Роли</Header>
                {
                    roles
                    ?
                    roles.map((role, i) =>
                        <FormItem top='Название роли' key={i}>
                            <Input placeholder='Грузчик' value={role.value} onChange={(event) => changeHandler(i, event)} />
                        </FormItem>
                    )
                    :
                    null
                }
                <Div>
                    <Button
                        stretched
                        mode='secondary'
                        size='m'
                        onClick={() => setRoles([...roles, ''])}
                    >Добавить роль</Button>
                </Div>
            </Group>
            <Group>
                <Div>
                    <Button
                        stretched
                        size='m'
                        data-to='locs'
                        onClick={(event) => {
                            setLoc(JSON.stringify({
                                img: file,
                                location: header,
                                role: roles
                            }))
                            go(event)
                        }}
                    >Сохранить</Button>
                </Div>
            </Group>
        </Panel>
    )
}

export default NewLocation