import type { Metadata } from "next";
import React from "react";
import {NextIntlClientProvider} from 'next-intl';
import SessionProviderWrapper from "@/app/SessionProviderWrapper";
import {ThemeProvider} from "@/app/ThemeProvider";
import {getMessages} from 'next-intl/server';
import "../../styles/globals.css";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
  title: "starter app",
  description: "a starter for build dynamics website",
};

export default async function LocaleLayout({
   children,
   params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased",
            )}>
            <SessionProviderWrapper>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        themes={["dark", "light"]}
                        disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </SessionProviderWrapper>
            </body>
        </html>
    );
}
