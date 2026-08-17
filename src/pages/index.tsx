import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi-step form</title>
        <meta
          name="description"
          content="A multi-step form built with Next.js"
        />
      </Head>
      <main>
        <h1>Multi-step form</h1>
        <ButtonLink variant="primary" size="lg" href="/sign-up" fullWidth>
          Lets go! 👉
        </ButtonLink>
      </main>
    </>
  );
}
