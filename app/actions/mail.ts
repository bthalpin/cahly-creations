'use server'

import { sendMail } from "../lib/resend"

type Mail = {
    to?: string; 
    from?: string; 
    subject: string; 
    html: string;
}

export async function sendMailOnServer(mailData: Mail) {
    const workspaces =  await sendMail(mailData)

    return workspaces
}