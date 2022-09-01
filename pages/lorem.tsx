import { NextPage } from "next";
import Typed from "react-typed";

const LoremPage : NextPage = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            {/* <Typed
                className="text-xl"
                strings={[
                    'hello there 👋', 
                    'it looks like you\'ve enter a void of space.', 
                    'quick, get out of here as soon as you can...',
                    '...',
                    'bye 👋',
                    '...'
                ]}
                typeSpeed={30}
                backSpeed={20}
            />*/}
            <div className="text-xl">
                <h1>hello there 👋</h1>
            </div>
            
        </div>
    )
}

export default LoremPage;
