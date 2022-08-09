import type { NextPage } from "next";
import Header from "../components/header";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import PageHead from "../components/head";

function sendMail() {
    const mailto: string = `mailto:riyuzenn@pm.me?subject=Hello zenn&body=The quick brown fox jumps over the lazy dog`;
    window.location.href = mailto;
}

const AboutPage: NextPage = () => {
    return (
        <>
            <PageHead title="riyuzenn – about" />
            <Header />
            <div className="flex mx-5 my-[20%] md:mx-14 md:my-[25%] lg:mx-[15%] lg:my-[20%] xl:mx-[25%] xl:my-[5%]">
                <div className="flex-col leading-[2rem] items-start space-y-5">
                    <img className="rounded-md" width={700} src="/banner.gif" />
                    <br />
                    <h2 className="text-[20px] leading-[2rem]">Information About me</h2>
                    <p className="animate-fade">
                        I'm zenn, an average unmotivated programmer with over three years of experience. I specialized
                        in front-end development who focuses on design simplicity and minimalism. I appreciate the
                        open-source, linux community and everything BFS-related (Build From Scratch). In fact, this
                        website is re-written from scratch (again).
                    </p>
                    <p className="animate-fade15">
                        After switching from GNU/Linux (Arch), ricing became a habit for me on occasion . My{" "}
                        <a
                            className="text-[#ac8aac] hover:underline"
                            href="https://github.com/riyuzenn/dotfiles"
                            target="_blank"
                        >
                            dotfiles
                        </a>{" "}
                        can be found on my{" "}
                        <a
                            className="text-[#ac8aac] hover:underline"
                            href="https://github.com/riyuzenn/"
                            target="_blank"
                        >
                            GitHub
                        </a>{" "}
                        account, which is constantly changing as I please. If you're curious enough to ask why I
                        switched from GNU/Linux, well since most OS lack user's freedom and I wanted an operating system
                        that is lightweight as possible and have a full control to personalize my system whatever I
                        wanted to.
                    </p>
                    <hr className="my-20 border-[#292929]" />
                    <p>
                        If you want to follow my personal projects and anything I do over the internet, checkout my{" "}
                        <a href="https://github.com/riyuzenn" className="text-[#ac8aac] hover:underline">
                            GitHub
                        </a>{" "}
                        and{" "}
                        <a href="https://twitter.com/riyuzenn" className="text-[#ac8aac] hover:underline">
                            Twitter
                        </a>{" "}
                        account. However if you want to chat me out, reach me via Discord:{" "}
                        <b className="text-[#ac8aac]">zenn#7473</b>, or email me that can be found on the{" "}
                        <a href="/" className="text-[#ac8aac] hover:underline">
                            homepage
                        </a>
                        .
                    </p>

                    <br />

                    <h2 className="text-[20px] leading-[2rem]">About the site</h2>
                    <p>Here are some stack I used to make the site a real thing.</p>
                    <ul className="list-disc mx-8">
                        <li>
                            <p>
                                Built and written from scratch using{" "}
                                <a href="https://github.com/vercel/next.js" className="text-[#ac8aac] hover:underline">
                                    Next.js
                                </a>{" "}
                                with{" "}
                                <a
                                    href="https://github.com/tailwindlabs/tailwindcss"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    tailwindcss
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Powered and hosted at{" "}
                                <a href="https://github.com/vercel" className="text-[#ac8aac] hover:underline">
                                    Vercel
                                </a>
                                .
                            </p>
                        </li>
                        <li>
                            <p>
                                The website was designed using{" "}
                                <a href="https://github.com/figma" className="text-[#ac8aac] hover:underline">
                                    Figma
                                </a>
                                .
                            </p>
                        </li>
                        <li>
                            <p>
                                Main font used was{" "}
                                <a
                                    href="https://github.com/JetBrains/JetBrainsMono/"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    JetBrains Mono
                                </a>{" "}
                                typeface.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
