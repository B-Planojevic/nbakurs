import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.css';

const CardInfo = (props) => {
    return(
        <div className={styles.cardNfo}>
            <span className={styles.teamName}>
                Cavaliers
            </span>
            <span className={styles.data}>
                <FontAwesome name="clock-o"/>
                02/19
            </span>
        </div>
    )
}

export default CardInfo;