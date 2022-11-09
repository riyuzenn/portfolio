import type { NextPage } from "next";
import Header from "../header";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import Typed from "react-typed";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function sendMail() {
    const mailto: string = `mailto:riyuzenn@pm.me?subject=Hello zenn&body=The quick brown fox jumps over the lazy dog`;
    window.location.href = mailto;
}

const IndexPage: NextPage = () => {
    const router = useRouter();
    let _ = router.asPath === "/";
    const [intro, setIntro] = useState(!_);
    const [introComplete, setIntroComplete] = useState(false);
    const [a, b] = useState(intro);

    useEffect(() => {
        let _ = localStorage.getItem("intro-completed");
        if (_) {
            setIntroComplete(true);
            b(true);
        }
    }, []);
    const onIntroEnd = useCallback(() => {
        localStorage.setItem("intro-completed", "true");
        setIntroComplete(true);

        b(true);
    }, []);
    return (
        <>
            <Header className={`${a || introComplete ? "block animate-fade05" : "hidden"}`} />
            <div
                className={`${
                    a || introComplete ? "block" : "hidden"
                } flex xl:relative md:relative lg:relative mx-5 my-[20%] md:mx-14 md:my-[25%] lg:mx-[15%] lg:my-[20%] xl:mx-[25%] xl:my-[10%]`}
            >
                <img
                    className="hidden md:block xl:block lg:block md:absolute xl:absolute lg:absolute top-[5%] opacity-40 md:top-[-5%] md:left-[35%] xl:top-[-10%] xl:left-[40%]"
                    src="/grid.png"
                />
                <div className="md:absolute xl:absolute lg:absolute flex-col items-start space-y-9">
                    <h1 className="animate-fade05 text-[#e7e7e7] text-[35px] font-bold leading-[4rem] md:text-[55px] lg:text-[70px] xl:text-[65px] xl:leading-[4.5rem]">
                        an <span className="gt">open-source</span> & linux enthusiast.
                    </h1>

                    <p className="animate-fade">
                        Hey there! I'm riyuzenn, but I prefer riyu or zenn. I started my programming journey several years
                        ago & I've been surfing the internet for a decade.
                    </p>

                    <p className="animate-fade15">
                        With that amount of time, I managed to learn several languages including rust, python, javascript,
                        typescript, and c#. Yet still learning c/c++. I also enjoy functional, declarative, and
                        object oriented programming.
                    </p>
                    {/* 

                        I know i should've use ul instead of div and flexbox. For me i'm comfortable with flexbox hehe

                    */}

                    <div className="flex space-x-10">
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/riyuzenn"
                                className="hover:bg-[#262626] hover:rounded-md px-2 py-2"
                                target="_blank"
                            >
                                <FaGithub size={22} className="fill-[#a0a0a0] hover:fill-[#cacaca]" />
                            </a>

                            <a
                                href="https://twitter.com/riyuzenn"
                                className="hover:bg-[#262626] hover:rounded-md px-2 py-2"
                                target="_blank"
                            >
                                <FaTwitter size={22} className="fill-[#a0a0a0] hover:fill-[#cacaca]" />
                            </a>

                            {/* 
                            <a href="mailto://riyuzenn@pm.me" className="hover:bg-[#262626] hover:rounded-md px-2 py-2">
                                <FaEnvelope size={22} className="fill-[#a0a0a0] hover:fill-[#cacaca]" />
                            </a> 
                            */}

                            <a
                                href="https://discord.com/users/418872913576591383"
                                className="hover:bg-[#262626] hover:rounded-md px-2 py-2"
                                target="_blank"
                            >
                                <FaDiscord size={22} className="fill-[#a0a0a0] hover:fill-[#cacaca]" />
                            </a>
                        </div>
                        <button
                            onClick={sendMail}
                            className="rounded-[20px] bg-[#262626] px-5 py-2 text-[14px] text-[#e7e7e7] border-[0.5px] border-[#4c4c4c] hover:bg-[#393939] ease-in-out"
                        >
                            Email Me
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${a || !introComplete ? "hidden" : "block"} top-0 z-30 h-1 gb`}></div>
            <div className={`flex h-[80vh] justify-center items-center ${a || introComplete ? "hidden" : "block"}`}>
                <div className="flex-col leading-4 w-[40%]">
                    <button className="hover:text-[#cacaca]" onClick={onIntroEnd}>
                        Skip intro <span>&rarr;</span>
                    </button>
                    <br />
                    <br />
                    <Typed
                        className="leading-[2rem]"
                        strings={[
                            "When you connect to the internet, you become subject to many threats. As a developer, my goal is to design and innovate open source, highly scalable secure environments for folks who value their privacy.",
                        ]}
                        onComplete={() => setTimeout(onIntroEnd, 1000)}
                        typeSpeed={30}
                    />
                </div>
            </div>
        </>
    );
};

export default IndexPage;
