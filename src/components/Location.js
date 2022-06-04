import React from 'react'

import styles from './location.module.scss'

const Location = ({img, location, role}) => {
    return (
        <div className={styles.location}>
            <div className={styles.title}>{location}</div>
            {role
                ?
                <div className={styles.role}>Роль: {role}</div>
                :
                null
            }
            <img className={styles.img} src={img} />
        </div>
    )
}

export default Location