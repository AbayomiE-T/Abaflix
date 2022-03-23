import React from 'react'

import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles['nav-item-container']}>
                    <a className={styles['nav-item']}>
                        <span className={styles.logo}>ABAFLIX</span>
                    </a>
                    <a className={styles['nav-item']}> Go to liked movies</a>
                </div>
            </nav>

            <h1 className={styles.banner}>Let's go to the movies!</h1>
        </>
    )
}

export default Header