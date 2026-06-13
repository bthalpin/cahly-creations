'use client' 

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Nav () {
    const [open, setOpen] = useState(false);

    return (
        <section className={styles.navbar}>
            <div>
                <section className={styles.nav_logo}>
                    <img src={'/logo_text.png'} />
                </section>
                <div  onClick={() => setOpen(prevOpen => !prevOpen)} className={`${styles.hamburger_container} ${open ? styles.hamburger_menu_open : ''}`}>
                    <div className={styles.hamburger}></div>
                </div>
                <section className={`${styles.nav_links} ${open ? styles.menu_open : ''}`} onClick={() => setOpen(false)}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/gallery'}>Gallery</Link>
                    <a href={'mailto:info@cahlycreations.com'} className={styles.order_button}>CONTACT</a>
                </section>
            </div>
        </section>
    )
}