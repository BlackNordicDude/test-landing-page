/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../header/header.module.css'
import src from '../../images/logo.png'
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1041px)' });

    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_nav}>
                    <div className={styles.logo_wrapper}>
                        <a href="#">
                            <img src={src} alt="logo" className={styles.logo_img}/>
                        </a>
                    </div>
                    {isDesktop && 
                        <>
                            <nav className={styles.nav}>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Pricing</a>
                                <a href="#">Blog</a>
                            </nav>
                            <div className={styles.contact}>
                                Contact
                            </div>
                        </>
                    }   
                </div>
                <div className={styles.header_descr}>
                    <h1>
                        Portfolio
                    </h1>
                    <p>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header