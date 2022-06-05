import React, { useState, useEffect } from 'react'
import styles from './new.module.scss'
import { Panel, PanelHeader, PanelHeaderBack, Div, FormItem, Input, Button, Group, Header, Text, HorizontalScroll, HorizontalCell, Avatar } from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge';

const New = ({id, go, play, fetchedUser, socket, locations}) => {

    const [users, setUsers] = useState(null)
	const [invites, setInvites] = useState([])
    const [room, setRoom] = useState();
    const [serverUsers, setServerUsers] = useState()
    const [invited, setInvited] = useState(false)
    const [inviteUser, setInviteUser] = useState(null)

    const joinRoom = () => {
        if (room !== '') {
            socket.emit('join_room', fetchedUser.id)
        }
    }
    joinRoom();

    const invite = () => {
        bridge.send("VKWebAppGetFriends", {
            multi: true,
        }).then(data => {
            setUsers(data.users);
            const newObject = [];
            data.users.forEach((el) => {
                let statusData = {status: 'ожидание'}
                let oldData = el;
                let newData = Object.assign(statusData, oldData)
                newObject.push(newData)

                socket.emit('invite', {
                    from: fetchedUser,
                    to: el.id,
                    users: newObject,
                })
            });
            setUsers(newObject)
        })
    }

    const accept = (event) => {
        const user = JSON.parse(event.currentTarget.dataset.to)
        socket.emit('leave_room', fetchedUser.id)
        socket.emit('join_room', user.id)
        setInvites(null)
        setInvited(true)
        setInviteUser(user)

        socket.emit('accept', {
            from: fetchedUser.id,
            to: user.id,
            users: serverUsers
        })
    }

	useEffect(() => {
        socket.on('invited', (data) => {
            setInvites([...invites, data.from])
            setServerUsers(data.users);
        })
		socket.on('invite_accept', (data) => {
            let newData = []
            data.users.forEach((el, i) => {
                if (el.id == data.from) {
                    el.status = 'принято'
                }
                newData.push(el)
            })
            setUsers(newData)
        })
	}, [socket]);

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='home' />}>
                Новая игра
            </PanelHeader>
            {
                invited
                ?
                <Group>
                    <Header>Ожидание создателя</Header>
                    <HorizontalScroll>
                        <div style={{ display: "flex" }}>
                            <HorizontalCell
                                style={{width: '260px'}}
                                size="s"
                                header={inviteUser.first_name}
                                subtitle={
                                    <span style={{color: 'green'}}>главный</span>
                                }
                            >
                                <Avatar src={inviteUser.photo_200} />
                            </HorizontalCell>
                            {
                                users
                                ?
                                users.map((user, i) => 
                                    
                                        <HorizontalCell
                                            style={{width: '260px'}}
                                            key={user.id}
                                            size="s"
                                            header={user.first_name}
                                            subtitle={
                                                user.status == 'ожидание'
                                                ?
                                                <span>{user.status}</span>
                                                :
                                                <span style={{color: 'green'}}>{user.status}</span>
                                            }
                                        >
                                            <Avatar src={user.photo_200} />
                                        </HorizontalCell>
                                )
                                :
                                null
                            }
                        </div>
                    </HorizontalScroll>
                </Group>
                :
                <Group>
                    <Header>
                        {
                            users
                            ?
                            <>Ожидание друзей</>
                            :
                            <>Создайте комнату с друзьями</>
                        }
                    </Header>
                    {
                        users
                        ?
                        <HorizontalScroll>
                            <div style={{ display: "flex" }}>
                                <HorizontalCell
                                    style={{width: '260px'}}
                                    size="s"
                                    header={fetchedUser.first_name}
                                    subtitle={
                                        <span style={{color: 'green'}}>вы</span>
                                    }
                                >
                                    <Avatar src={fetchedUser.photo_200} />
                                </HorizontalCell>
                                {
                                    users.map((user, i) => 
                                        
                                            <HorizontalCell
                                                style={{width: '250px'}}
                                                key={user.id}
                                                size="s"
                                                header={user.first_name}
                                                subtitle={
                                                    user.status == 'ожидание'
                                                    ?
                                                    <span>{user.status}</span>
                                                    :
                                                    <span style={{color: 'green'}}>{user.status}</span>
                                                }
                                            >
                                                <Avatar src={user.photo_200} />
                                            </HorizontalCell>
                                    )
                                }
                            </div>
                        </HorizontalScroll>
                        :
                        null
                    }
                </Group>
            }
            {
                users && !invited
                ?
                <Div>
                    <Button
                        stretched
                        size='m'
                        data-users={JSON.stringify(users)}
                        data-to='game'
                        onClick={(event) => {
                            socket.emit('game_start', {
                                locations: locations,
                                room: fetchedUser.id,
                                users: [...users, fetchedUser]
                            })
                        }}
                    >Начать игру</Button>
                </Div>
                :
                <>
                    {
                        !invited
                        ?
                        <Div>
                            <Button
                                size='m'
                                mode='secondary'
                                stretched
                                onClick={() => invite()}
                            >Пригласить друзей</Button>
                        </Div>
                        :
                        null
                    }
                </>
            }
            <Group>
                <div>
                {
                    invites && !users
                    ?
                    <>
                        <Header>Ваши приглашения</Header>
                        {invites.map((invite, i) =>
                            <Div key={i} style={{display: 'flex'}}>
                                <Avatar size='72px' src={invite.photo_200} />
                                <div style={{marginLeft: '16px'}}>
                                    <div>{invite.first_name} {invite.last_name}</div>
                                    <Button 
                                        style={{marginTop: '16px'}}
                                        data-to={JSON.stringify(invite)} 
                                        onClick={(event) => {
                                            accept(event)
                                        }
                                        }
                                    >Принять</Button>
                                </div>
                            </Div>
                        )}
                    </>
                    :
                    null
                }
                </div>
            </Group>
        </Panel>
    )
}

export default New