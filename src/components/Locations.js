import React from 'react'
import { useState } from 'react'
import Location from './Location'

import Pirate from '../img/pirate.jpg'
import Zinger from '../img/zinger.jpg'
import Ostankino from '../img/ostankino.jpg'
import Subway from '../img/metro.jpg'

const Locations = () => {

    const [locations, setLocations] = useState([
        {
            img: Pirate,
            location: 'Пиратский корабль'
        },
        {
            img: Zinger,
            location: 'Офис ВКонтакте'
        },
        {
            img: Ostankino,
            location: 'Останкино'
        },
        {
            img: Subway,
            location: 'Метро'
        }
	])

    return (
        <div>
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