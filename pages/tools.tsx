import type { NextPage } from "next";
import Link from "next/link";
import PageHead from "../components/head";
import Header from "../components/header";

const Tools: NextPage = () => {
    return (
        <>
            <PageHead title="riyuzenn – tools" desc="languages & tools i use on a daily basis" image="/preview.png" />
            <Header />
            <div className="flex my-10 mx-10 xl:my-20 lg:my-20 md:my-10 sm:my-10 xl:mx-70 lg:mx-64 md:mx-28 sm:mx-48">
                <div className="w-full space-y-9">
                    <h1 className="text-[#e7e7e7] text-[35px] font-bold leading-[4rem] md:text-[50px] lg:text-[50px] xl:text-[50px] xl:leading-[4.5rem]">
                        Languages & Tools
                    </h1>
                    <p>All programming languages, frameworks and software tools I use on a daily basis.</p>
                    <hr className="border-[#292929] " />
                    <br />
                    <h2 className="text-[20px] leading-[2rem]">Languages I know</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="" height={78} width={78} src="/icons/rustlang.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://rustlang.com"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        rustlang.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Rust</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Another compiled language I use for developer tools too.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="" height={78} width={78} src="/icons/python.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://python.org"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        python.org
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Python</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    A high-level dynamically typed language I use for backend stuff.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img
                                    className="rounded-md shadow-md"
                                    height={78}
                                    width={78}
                                    src="/icons/javascript.png"
                                />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://javascript.com"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        javscript.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Javascript</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    A language I use for web stuff and discord.js.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="" height={78} width={78} src="/icons/typescript.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://typescriptlang.org"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        typescriptlang.org
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Typescript</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Superset of JavaScript with types. I mainly use for fullstack dev (NextJS).
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="" height={78} width={78} src="/icons/csharp.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        docs.microsoft.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">C#</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Another Object-Oriented language I <b>used</b> for WPF & Unity Game Engine (Before).
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="" height={78} width={78} src="/icons/c.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://gcc.gnu.org/"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        gcc.gnu.org
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">C</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Another compiled low-level performance language I use for developer tools (Still
                                    learning).
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <hr className="border-[#292929]" />
                    <h2 className="text-[20px] leading-[2rem]">Software Tools</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/neovim.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://neovim.io"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        neovim.io
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Neovim</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Another vim based text editor I use when I'm using{" "}
                                    <a
                                        className="text-[#ac8aac] hover:underline"
                                        href="https://archlinux.org"
                                        target="_blank"
                                    >
                                        Arch
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/vscodium.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://code.visualstudio.com"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        vscodium.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">VSCodium</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    A better build of VSCode w/o telemetry tracking & MS branding.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/git.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://git-scm.com"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        git-scm.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Git</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    A version control system (VCS) I use for my projects (Hosted @
                                    <a
                                        className="text-[#ac8aac] hover:underline"
                                        href="https://github.com/riyuzenn"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                    ).
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#292929]" />
                    <h2 className="text-[20px] leading-[2rem]">Design Tools</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img className="rounded-md shadow-md" height={78} width={78} src="/icons/figma.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://figma.com"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        figma.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Figma</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Design tool of my choice when it comes to website design & mock ups.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/affinity-designer.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://affinity.serif.com/en-us/designer/"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        affinity.serif.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Affinity Designer</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Vector graphics tool & great alternative (imo) for Adobe Illustrator.
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/photo.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://affinity.serif.com/en-us/photo/"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        affinity.serif.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Affinity Photo</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Photo editting tool with alot of features & great alternative for Photoshop.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#292929]" />
                    <h2 className="text-[20px] leading-[2rem]">Operating System</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/arch.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://archlinux.org"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        archlinux.org
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Arch</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    Operating system I mainly use when working on a project (
                                    <a
                                        className="text-[#ac8aac] hover:underline"
                                        href="https://github.com/riyuzenn/dotfiles"
                                        target="_blank"
                                    >
                                        dotfiles
                                    </a>
                                    ).
                                </p>
                            </div>
                        </div>
                        <div className="block overflow-hidden rounded-md">
                            <div className="flex justify-center items-center w-full shadow-md bg-[#262626] h-48">
                                <img height={78} width={78} src="/icons/windows10.png" />
                            </div>

                            <div className="flex-col space-y-2 p-4 bg-[#191919] h-40 rounded-bl-md rounded-br-md">
                                <div className="space-y-1">
                                    <a
                                        href="https://www.microsoft.com/en-us/windows"
                                        target="_blank"
                                        className="text-[14px] text-[#4c4c4c] hover:underline"
                                    >
                                        microsoft.com
                                    </a>
                                    <h5 className="text-[16px] text-[#cacaca]">Windows 10</h5>
                                </div>

                                <p className="mt-1 text-[14px] text-[#a0a0a0]">
                                    OS I use when I'm working with app that is not supported with GNU/Linux.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tools;
