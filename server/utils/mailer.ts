import { type Transporter, createTransport } from "nodemailer";

let mailer: Transporter | null = null;

type MailerOptions = {
    to: string[] | string;
    subject: string;
    html?: string;
    text?: string;
};

/**
 * Returns a cached Nodemailer transporter configured from runtime settings.
 */
function getMailer() {
    if (mailer) return mailer;

    const { mail } = useRuntimeConfig();

    mailer = createTransport({
        host: mail.host,
        port: mail.port,
        auth: {
            user: mail.user,
            pass: mail.pass,
        },
        from: mail.from,
    });

    return mailer;
}

/**
 * Sends an email using the configured mail transporter.
 *
 * @param opts - Email message options.
 * @returns Result of the Nodemailer send operation.
 */
export async function sendEmail(opts: MailerOptions) {
    const { mail } = useRuntimeConfig();

    const mailer = getMailer();

    return mailer.sendMail({
        from: mail.from,
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
    });
}
