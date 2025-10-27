import {defineAction} from "astro:actions";
import { render } from "@react-email/render";
import {Resend} from "resend";
import GithubAccessTokenEmail from "~/emails/templateEmail";
import {z} from "astro:schema";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept:"form",
        input: z.object({
            name: z.string().min(5).max(30),
            email: z.string().email(),
            message: z.string().min(10).max(300),
        }),
        handler: async ({name, email, message})=>{
            const emailContent = GithubAccessTokenEmail({username: name, email: email, message: message});
            const html = await render(emailContent);
            const text = await render(emailContent, { plainText: true });
            // send an email
            const {data, error} = await resend.emails.send({
                from: import.meta.env.RESEND_EMAIL_FROM,
                to: [import.meta.env.RESEND_EMAIL_TO],
                subject: 'website contact form',
                html,
                text,
            });
            if (error) {
                throw error;
            }
            return data;
        }
    })
}