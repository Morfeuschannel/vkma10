import React, { useState, useEffect, useRef } from 'react'
import Location from '../components/Location'
import { Button, Panel, PanelHeader, Div, Text, Header, Group } from '@vkontakte/vkui'
import Shpion from '../img/shpion.png'
import Countdown from 'react-countdown';

const Game = ({id, go, players, locations, location, spy, setLocation, socket, fetchedUser, flash, room}) => {

    const [current, setCurrent] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [nextPlayer, setNextPlayer] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
    const [spion, setSpion] = useState(null);

    const Completionist = () => <div>Время вышло! {spy.first_name} {spy.last_name} был(а) шпионом!<br /><Button style={{marginTop: '16px'}} data-to='home' onClick={go} size='m' stretched>На главный экран</Button></div>;

    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
            flash();
            socket.emit('leave_room', room)
            setTimeout(() => {
                socket.emit('join_room', fetchedUser.id)
            }, 1000)
            return <Completionist />;
        } else {
            return <>
                <div>{minutes}:{String(seconds).length == 1 ? '0' + seconds : seconds}</div>
                <div>Начинайте задавать вопросы друг другу!</div>
            </>;
        }
    };

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    const mafia = spy;

    useEffect(() => {
        
	}, [socket]);
    
    return (
        <Panel id={id}>
                <PanelHeader>Игра</PanelHeader>
                {
                    <Group>
                        <Div>
                            <Countdown
                                date={Date.now() + players.length * 1000}
                                renderer={renderer}
                            />
                        </Div>
                        {
                            fetchedUser.id == spy.id
                            ?
                            <Div>
                                <Location
                                    img={Shpion}
                                    location={'Вы шпион'}
                                    role={'Вычислите локацию игроков'}
                                />
                            </Div>
                            :
                            <Div>
                                <Location
                                    img={location.img}
                                    location={location.location}
                                    role={
                                        location.role[randomInteger(0, location.role.length - 1)]
                                    }
                                />
                            </Div>
                        }
                    </Group>
                }
        </Panel>
    )
}

export default Game