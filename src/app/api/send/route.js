import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Whvmkug5_DgVfGaCKaukwAiju3gXmsoed");

export async function POST(req, res) {
    const { email, subject, message } = await req.json();

    try {
        const { data } = await resend.emails.send({
            from: `onboarding@resend.dev`,
            to: process.env.FROM_EMAIL,
            subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>{message}</p>
                    <p>Отправлено от {email}</p>
                </>
            ),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
