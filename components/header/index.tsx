import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    className?: string;
};

export default function Header(props: Props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const router = useRouter();

    return (
        <>
            <div
                className={`${props.className} sticky top-0 border-b border-b-[#262626] w-full z-30 clearNav md:bg-opacity-95 transition duration-300 ease-in-out`}
            >
                <div className="sticky top-0 z-30 h-1 gb"></div>
                <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <Link href="/">
                            <a className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline">
                                {/* <h1 className="text-[16px]  tracking-tighter text-[#bfbfbf] md:text-4x1 text-opacity-100 lg:text-[20px]">
                  zenn
                </h1> */}

                                <img src="/logo.png" height={45} width={45} />
                            </a>
                        </Link>
                        <button
                            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
                            type="button"
                            aria-label="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#bfbfbf"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <nav className="flex-col flex-grow">
                            <ul className="flex flex-grow justify-end flex-wrap items-center space-x-2">
                                <li>
                                    <Link href="/">
                                        <a
                                            className={`font-medium text-[15px] text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-5 py-1 ${
                                                router.asPath === "/" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        <a
                                            className={`font-medium text-[15px] text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-5 py-1 ${
                                                router.asPath === "/projects" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            projects
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tools">
                                        <a
                                            className={`font-medium text-[15px] text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-5 py-1 ${
                                                router.asPath === "/tools" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            tools
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a
                                            className={`font-medium text-[15px] text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-5 py-1 ${
                                                router.asPath === "/about" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            about
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a
                                            className={`font-medium text-[15px] text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-5 py-1 ${
                                                router.asPath === "/contact" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
