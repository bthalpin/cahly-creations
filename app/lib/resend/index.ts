import { Resend } from 'resend';

const internalEmail = process.env.NEXT_PUBLIC_EMAIL!;
const resend = new Resend(process.env.RESEND_API_KEY);

type Mail = {
    to?: string; 
    from?: string; 
    subject: string; 
    html: string;
}

export const sendMail = async ({
    to = internalEmail,
    from = internalEmail,
    subject,
    html
}: Mail) => {

    try {

        const sent = await resend.emails.send({
          from,
          to,
          subject,
          html
        });
        
        return { success: true, sent }
    } catch (err) {
        console.error(`Error on sendMail: `, err)

        return { success: false }
    }

}