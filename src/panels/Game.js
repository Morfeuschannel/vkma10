import React, { useState } from 'react'
import Location from '../components/Location'

import { Button, Panel, PanelHeader, Div, Text, Header } from '@vkontakte/vkui'

import Shpion from '../img/shpion.png'

const Game = ({id, go, players, locations}) => {

    const [current, setCurrent] = useState(null);
    const [location, setLocation] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [nextPlayer, setNextPlayer] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    const [spy, setSpy] = useState(randomInteger(1, players.length));
    const mafias = players;
    const mafia = mafias[spy]
    
    return (
        <Panel id={id}>
            <PanelHeader>Игра</PanelHeader>
            {
                !gameStarted
                ?
                <Div>
                    <Text>Вы начинаете игру! Нажимте «Начать круг» и узнаете, кто вы. Если вы обычный игрок, увидите локацию. А если шпион, то увидите соответствующую карту. С помощью вопросов найдите шпиона или узнайте локацию, в которой вы находитесь!</Text>
                    <Button
                        size='m'
                        stretched
                        style={{marginTop: '20px'}}
                        onClick={() => {
                            setGameStarted(true)
                            setLocation(locations[randomInteger(0, locations.length - 1)])
                            setCurrent(1)
                        }}
                    >Начать круг</Button>
                </Div>
                :
                <Div>
                    {
                        !nextPlayer && current <= players.length
                        ?
                        <>
                            {
                                current !== spy
                                ?
                                <>
                                    <Header style={{paddingLeft: '0px', paddingRight: '0px'}}>Игрок {players[current - 1]}</Header>
                                    <Location
                                        img={location.img}
                                        location={location.location}
                                        role={
                                            location.role[randomInteger(0, location.role.length - 1)]
                                        }
                                    />
                                </>
                                :
                                <>
                                    <Header>Игрок {players[current - 1]}</Header>
                                    <Location 
                                        img={Shpion}
                                        location='Вы шпион!'
                                        role='Вычислите локацию игроков'
                                    />
                                </>
                            }
                        </>
                        :
                        <>
                            {
                                current < players.length
                                ?
                                <Text>Передайте телефон следующему игроку</Text>
                                :
                                <Text>Все роли выданы игрокам! Задавайте друг другу вопросы и вычислите шпиона. Помните, нужно быть аккуратнее, шпион по вопросам может узнать, где вы находитесь!</Text>
                            }
                        </>
                    }
                    {
                        !gameEnd
                        ?
                            <Button
                                size='m'
                                stretched
                                style={{marginTop: '20px'}}
                                onClick={() => {
                                    setNextPlayer(!nextPlayer)
                                    if (nextPlayer) {
                                        setCurrent(current + 1)
                                    }
                                    if (current == players.length) {
                                        setGameEnd(!gameEnd)
                                    }
                                }}
                            >
                            {
                                !nextPlayer
                                ?
                                'Скрыть мою карту'
                                :
                                'Открыть карту'
                            }
                        </Button>
                        :
                        <Button
                                size='m'
                                stretched
                                style={{marginTop: '20px'}}
                                data-to='timer'
                                data-mafia={mafia}
                                onClick={go}
                        >Начать обсуждение</Button>
                    }
                </Div>
            }
        </Panel>
    )
}

export default Game