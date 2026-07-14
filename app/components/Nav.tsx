'use client' 

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/nav.module.css';
import Contact from './Contact';

export default function Nav () {
    const [open, setOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    return (
        <>
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
                        <p  className={styles.order_button} onClick={() => setContactOpen(true)}>CONTACT</p>
                    </section>
                </div>

            </section>
            
            <Contact open={contactOpen}  setOpen={setContactOpen} />
        </>
    )
}