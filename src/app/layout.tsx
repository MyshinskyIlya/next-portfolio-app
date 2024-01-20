import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter: any = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Myshinsky Ilya",
    description: "Web Developer Myshinsky Ilya",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <Head>
                <meta name="description" content={metadata.description} />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
