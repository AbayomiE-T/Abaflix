import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {

    const isHomePageActive = useSelector((state) => state.headerUi.isHomePageActive)

    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles['nav-item-container']}>
                    <Link to="/" className={styles['nav-item']}>
                        <span className={styles.logo}>ABAFLIX</span>
                    </Link>
                    {isHomePageActive && <Link to="liked" className={styles['nav-item']}> Go to favourites <i className="fa fa-angle-right"></i></Link>}
                    {!isHomePageActive && <Link to="/" className={styles['nav-item']}> <i className="fa fa-angle-left"></i> Go back home </Link>}
                </div>
            </nav>
        </>
    )
}

export default Header