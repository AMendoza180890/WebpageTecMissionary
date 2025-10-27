import type {APIRoute} from "astro";
import { render } from "@react-email/render";
import {Resend} from "resend";
import GithubAccessTokenEmail from "~/emails/templateEmail";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
    // create the email
    const emailContent = GithubAccessTokenEmail({username: "Acme"});
            const html = await render(emailContent);
            const text = await render(emailContent, { plainText: true });
            // send an email
            const {data, error} = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['delivered@resend.dev'],
                subject: 'Hello world',
                html,
                text,
            });
    if (error) {
        return new Response(JSON.stringify(error));
    }

    return new Response(JSON.stringify(data))
};