import Head from "next/head";

type PageHeadProps = {
    title: string;
    author?: string;
    url?: string;
    desc?: string;
    sitename?: string;
    image?: string;
};

export default function PageHead({
    title,
    author = "@riyuzenn",
    url = "https://riyuzenn.me",
    desc = "an average unmotivated programmer",
    sitename = "",
    image = "",
}: PageHeadProps) {
    return (
        <Head>
            <title>zenn@riyuzenn ~ </title>
            <meta name="google" content="notranslate" />
            <meta name="twitter:creator" content={author} />
            <meta name="referrer" content="strict-origin" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={sitename} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
            {image ? <meta property="og:image" content={image} /> : <></>}
            {image ? <meta property="twitter:image" content={image} /> : <></>}

            <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover" />
        </Head>
    );
}
