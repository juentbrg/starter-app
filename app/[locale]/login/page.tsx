'use client';

import {signIn, signOut, useSession} from 'next-auth/react';
import {useTranslations} from "next-intl";


const LoginPage = () => {
  const t = useTranslations("Login");
  const {data: session} = useSession();

  return (
    <div>
        {session ? (
            <div>
                {session.user?.image && <img src={session.user?.image} alt="user picture"/>}
                <p>{t("signedAs")} {session.user?.email}</p>
                <button onClick={() => signOut()}>{t("signOut")}</button>
            </div>
        ) : (
            <div>
                <div>
                    <h1>{t("title")}</h1>
                    <button onClick={() => signIn('google')}>{t("withGoogle")}</button>
                </div>
            </div>
        )}
    </div>
  );
};

export default LoginPage;