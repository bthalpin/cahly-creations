import { useEffect, useState } from "react";

import styles from '../styles/contact.module.css';
import { sendMailOnServer } from "../actions/mail";

const defaultContact = {
    name: '',
    email: '',
    message: '',
}

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Contact ({ open, setOpen }: Props) {
    
    const [contact, setContact] = useState({ ...defaultContact });
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const allowScroll = () => {
        setTimeout(() => {
            document.body.style.overflowY = 'unset'
        }, 300)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            allowScroll()
        }

        return () => {
            setContact({ ...defaultContact })
        }
    }, [open])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }, [error])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }))
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = async () => {

        try {
            const missingInputs = [
                ...!contact.email?.trim() ? ['Email'] : [],
                ...!contact.
                message?.trim() ? ['Message'] : [],
            ]
    
            if (missingInputs.length > 0) {
                setError(`Please fill out you ${missingInputs.join(' and ')}`)
                return
            }
    
            setSending(true)
            const mailData = {
                subject: 'Contact form submission from cahlycreations.com',
                html: `
                    <p>Claudia,<p>
                    <p>You have received a message from the contact form on cahlycreations.com<p>
                    ${contact.name ? `<p>Name: ${contact.name}</p>` : ''}
                    <p>Email: ${contact.email}</p>
                    <p>Message: ${contact.message}</p>
                `
            }
    
            const sendingMail = await sendMailOnServer(mailData)
    
            if (sendingMail?.success && sendingMail.sent?.data?.id) {
                setSuccess(true)

                setTimeout(() => {
                    handleClose()
                }, 5000)
            }
        } catch {
            setSending(false)
        }
    }

    return (
        <div className={`${styles.modal_wrapper} ${open ? styles.modal_wrapper_open : ''}`} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.close_button} onClick={handleClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#DEB8AB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6L6 18" />
                        <path d="M6 6L18 18" />
                    </svg>
                </div>

                {!success ?
                    <>
                        <h2>Let's Create Something Beautiful</h2>
                        <p>I'd love to hear about your celebration!  Tell me what you're looking for, and I'll get back to you as soon as I can.</p>

                        <div className={'input_container'}>
                            <label>Name</label>
                            <input type={'text'} name={'name'} value={contact.name} onChange={handleChange} placeholder="Name"/>
                        </div>
                        <div className={'input_container'}>
                            <label>Email</label>
                            <input type={'email'} name={'email'} value={contact.email} onChange={handleChange} placeholder="Email"/>
                        </div>
                        <div className={'input_container'}>
                            <label>Tell me about your banner</label>
                            <textarea name={'message'} value={contact.message} onChange={handleChange} placeholder="Occasion, wording, colors, them, event date..."/>
                        </div>
                        <button disabled={sending} className={styles.send_button} onClick={handleSubmit}>{sending ? 'Sending...' : 'Send Message'}</button>
                        

                        {error ? 
                            <p>{error}</p>
                        : null}
                    </>
                    : 
                    <div className={styles.success_message}>
                        <h2>Thank you for reaching out!</h2>
                        <p>I'm excited to learn more about your custom banner. I'll review your message and respond as soon as I can.</p>
                    </div>
                }

            </div>
        </div>
    ) 
}