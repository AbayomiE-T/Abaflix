import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles['nav-item-container']}>
                    <Link to="/" className={styles['nav-item']}>
                        <span className={styles.logo}>ABAFLIX</span>
                    </Link>
                    <Link to="liked" className={styles['nav-item']}> Go to liked movies</Link>
                </div>
            </nav>
        </>
    )
}

export default Header