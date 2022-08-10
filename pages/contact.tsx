import type { NextPage } from "next";
import Header from "../components/header";
import { SiAboutdotme, SiDiscord, SiTwitter, SiGithub, SiReddit } from "react-icons/si";
import PageHead from "../components/head";

const ContactPage: NextPage = () => {
    return (
        <>
            <PageHead title="riyuzenn – contact" />
            <Header />
            <div className="flex mx-10 my-[20%] md:mx-14 md:my-[25%] lg:mx-[15%] lg:my-[20%] xl:mx-[25%] xl:my-[5%]">
                <div className="flex-col leading-[2rem] items-start space-y-5">
                    <img className="rounded-md" width={700} src="/contact.gif" />
                    <br />
                    <h2 className="text-[20px] leading-[2rem]">Social Links</h2>
                    <p>
                        Hey there, all of my <b>only</b> accounts can be found here. Yes I don't have Instagram &
                        Facebook.
                    </p>
                    <p>I prefer to contact me via discord or email since I oftenly use those platforms</p>
                    {/* <ul className="mx-8">
                        <li>
                            <p>
                                <span></span> <a href="" className="text-[#ac8aac] hover:underline" >zenn#7473</a>
                            </p>
                        </li>
                        
                    </ul> */}
                    <div className="flex items-center space-x-12">
                        <div className="flex-col">
                            <div className="flex space-x-5">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2">
                                        <SiAboutdotme size={13} />
                                    </span>
                                    pm.me :
                                </p>
                                <a
                                    target="_blank"
                                    href="mailto:riyuzenn@pm.me?subject=Hello zenn&body=The quick brown fox jumps over the lazy dog"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    riyuzenn
                                </a>
                            </div>
                            <div className="flex space-x-5">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2">
                                        <SiGithub size={12} />
                                    </span>
                                    github:
                                </p>
                                <a
                                    target="_blank"
                                    href="https://github.com/riyuzenn"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    @riyuzenn
                                </a>
                            </div>
                            <div className="flex space-x-3">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2">
                                        <SiTwitter size={12} />
                                    </span>
                                    twitter:
                                </p>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/riyuzenn"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    @riyuzenn
                                </a>
                            </div>
                            <div className="flex space-x-3">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2">
                                        <SiReddit size={12} />
                                    </span>
                                    reddit :
                                </p>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/riyuzenn"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    @riyuzenn
                                </a>
                            </div>
                            <div className="flex space-x-3">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2">
                                        <SiDiscord size={12} />
                                    </span>
                                    discord:
                                </p>
                                <a
                                    target="_blank"
                                    href="https://discord.com/users/952728445010460682"
                                    className="text-[#ac8aac] hover:underline"
                                >
                                    zenn#7473
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
