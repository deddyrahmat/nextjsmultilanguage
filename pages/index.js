import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      {t("title")}
      <br />
      <br />
      <br />
      <div>
        Change Language
        <div>
          <Link href="/" locale="id">
            <a>Indonesia</a>
          </Link>
        </div>
        <div>
          <Link href="/" locale="en">
            <a>English</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      // test: "tes",
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
};
