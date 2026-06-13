import Image from "next/image";

import styles from '../styles/home.module.css';
import MarketingCard from "../components/MarketingCard";
import ServiceCard from "../components/ServiceCard";

type MarketingTypes = 'handmade' | 'custom' | 'quality' | 'order'
const marketing: MarketingTypes[] = ['handmade', 'custom', 'quality', 'order']

type ServiceTypes = 'birthday' | 'graduation' | 'baby' | 'wedding'
const services: ServiceTypes[] = ['birthday', 'graduation', 'baby', 'wedding']

export default function Home() {
    return (
        <main className={styles.main_container}>
            <section className={styles.header}>
                <img src={'/cahly_logo_smaller.jpg'} alt={'Cahly Creations Logo'} />
                <h1>Made for Life's Big Moments</h1>
                <p>
                    Custom, handmade banners for birthdays, graduations and every celebration in between.
                </p>
                <p>Made with care.  Just for you.</p>
            </section>

            <section className={styles.marketing_section}>
                {marketing.map(cardType => <MarketingCard key={cardType} cardType={cardType}/>)}
            </section>

            <h2 className={styles.service_title_small}>PERFECT FOR</h2>
            <h2 className={styles.service_title}>Every Occasion</h2>
            <section className={styles.service_section}>
                {services.map((cardType, i) => <ServiceCard key={cardType} cardType={cardType} alternate={i%2 != 0}/>)}
            </section>
        </main>
    );
}
