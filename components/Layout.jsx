import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Layout.module.css'


const Layout = ({children }) => {
    return <>
        <div className={styles.layout}>
            <Header className={styles.header}  />
            <main className={styles.main}>
                {children}
            </main>

            <Footer className={styles.footer} />
        </div>
    </>
};

export default Layout;