import serviceConfig from "../config/serviceConfig";
import styles from '../styles/service_card.module.css';

type ServiceTypes = 'birthday' | 'graduation' | 'baby' | 'wedding'
type Props = {
    cardType: ServiceTypes;
    alternate: boolean;
}


export default function ServiceCard ({ cardType, alternate }: Props ) {

    const serviceData = serviceConfig[cardType]

    if (!serviceData) {
        return null
    }

    return (
        <div className={`${styles.service_card} ${alternate ? styles.service_card_alternate : ''}`}>
            <div className={styles.service_card_image}>
                <img src={serviceData.image} alt={serviceData.title} />

            </div>
            <div className={styles.service_card_name}>
                <div className={styles.service_card_image_container} style={{backgroundColor: serviceData.backgroundColor}}>
                    <img src={serviceData.icon} alt={serviceData.icon} />
                </div>
                <p>{serviceData.title}</p>
            </div>
        </div>
    )
}