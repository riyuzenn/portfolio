import type { NextPage } from "next";
import Banner from "../components/banner";
import PageHead from "../components/head";

const IndexPage: NextPage = () => {
    return (
        <>
            <PageHead title="riyuzenn – full stack dev" image="/preview.png" />
            <Banner />
        </>
    );
};

export default IndexPage;
