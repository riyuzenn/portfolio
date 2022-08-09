import "../styles/globals.css";
import type { AppProps } from "next/app";

function Main({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="bg-[#0f0f0] text-[#a0a0a0]">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default Main;
