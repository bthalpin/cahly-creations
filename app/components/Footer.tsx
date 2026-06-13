import styles from '../styles/footer.module.css';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <p>Thoughtful. Personal. Handmade.</p>
            <p>Let's make something beautiful.</p>
            <img src={'/heart_icon.png'} alt={'heart'} />
        </div>
    )
}