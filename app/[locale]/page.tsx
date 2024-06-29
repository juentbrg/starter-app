import {getTranslations} from "next-intl/server";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function Home() {
    const t = await getTranslations("Index");
    return (
        <main>
            <ThemeSwitcher />
            <h1>{t("title")}</h1>
        </main>
    );
}

