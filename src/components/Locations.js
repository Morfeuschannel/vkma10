import React from 'react'
import { useState } from 'react'
import Location from './Location'

import { Button } from '@vkontakte/vkui'

const Locations = ({locations, go}) => {

    return (
        <div>
            <Button
                size='m'
                stretched
                data-to='newLocation'
                onClick={go}
            >Добавить новую</Button>
            {
                locations.map((loc, i) => 
                    <Location
                        key={i}
                        img={loc.img}
                        location={loc.location} 
                        role={loc.role}
                    />
                )
            }
        </div>
    )
}

export default Locations