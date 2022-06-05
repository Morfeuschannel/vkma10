import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import { Panel, PanelHeader, Div, Button } from '@vkontakte/vkui'
import Countdown from 'react-countdown';
import styles from './timer.module.scss'

const Timer = ({id, go, players, flash, mafia}) => {

    const Completionist = () => <div>Время вышло! {mafia} был(а) шпионом!</div>;

    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
            flash();
            return <Completionist />;
        } else {
            return <>
                <div className={styles.timer}>{minutes}:{String(seconds).length == 1 ? '0' + seconds : seconds}</div>
                <div className={styles.text}>Начинайте задавать вопросы друг другу!</div>
            </>;
        }
    };

    return (
        <Panel id={id}>
            <PanelHeader>Таймер</PanelHeader>
            <Div>
                <Countdown
                    date={Date.now() + players.length * 60000}
                    renderer={renderer}
                />
                <Button
                    className={styles.btn}
                    size='m'
                    stretched
                    onClick={go}
					data-to='game'
                >Новый раунд</Button>
                <Button
                    className={styles.btn}
                    size='m'
                    mode='secondary'
                    stretched
                    onClick={go}
					data-to='home'
                >В главное меню</Button>
            </Div>
        </Panel>
    )
}

export default Timer