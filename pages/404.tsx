import type { NextPage } from "next";
import Link from "next/link";
import PageHead from "../components/head";

const NotFound: NextPage = () => {
    return (
        <>
            <PageHead title="riyuzenn – 404" desc="Uh oh, you've fallen from a rabbit hole." image="/preview.png" />
            <div className="top-0 z-30 h-1 gb"></div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex-col w-[50%] space-y-9">
                    <h1 className="text-[#e7e7e7] text-[60px] font-bold leading-[4.5rem]">
                        404 <span className="gt hidden xl:block lg:block md:block">:Not Found</span>
                    </h1>

                    <p>
                        The requested page does not exist. Perhaps it never existed after all? From here, your better
                        option is to go to the homepage, which I (probably assuredly) swear will not 404.{" "}
                    </p>

                    <br />
                    <Link href="/">
                        <a className="rounded-[20px] bg-[#262626] px-5 py-2 text-[14px] text-[#e7e7e7] border-[0.5px] border-[#4c4c4c] hover:bg-[#393939] ease-in-out">
                            Go Back
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default NotFound;
