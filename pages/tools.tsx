import type { NextPage } from "next";
import Link from "next/link";

const Tools: NextPage = () => {
    return (
        <>
            <div className="top-0 z-30 h-1 gb"></div>
            <div className="flex justify-center items-center h-screen mx-5 xl:mx-80 lg:mx-64 md:mx-52 sm:mx-48">
                <div className="w-full space-y-9">
                    <h1 className="text-[#e7e7e7] text-[40px] font-bold leading-[3.5rem] xl:leading-[4.5rem] xl:text-[60px] lg:leading-[4.5rem] lg:text-[60px]">
                        Under <span className="gt">:Development</span>
                    </h1>

                    <p>
                        Currently this page is on maintenance and under heavy development, watch out for any cautions.
                        Quickly I advise is to go back and try to visit another page instead.
                    </p>
                    <p>- zenn</p>

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
export default Tools;
