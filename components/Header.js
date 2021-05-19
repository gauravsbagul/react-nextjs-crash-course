
import React from 'react'
import styles from '../styles/Header.module.css'


const Header=({ }) => {
 
    return (
        <div>
            <h1 className={styles.title}>
                <span>
                    Next js course
                </span>
            </h1>
            <p className={styles.description}>
            Keep Update with lated news
            </p>
        </div>
    )
}

export default Header