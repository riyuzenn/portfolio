/*
    This sourrce file handle the rendering of the greeter svg
*/

type GreeterProps = {
    text?: string,
    bg?: string,
    fg?: string,
    subfg?: string,
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function greeter() {
    let current = new Date();
    let hour = current.getHours();

    if (hour < 12) {
        return "morning"
    } else if (hour < 18) {
        return "afternoon"
    } else {
        return "evening"
    }
}

function getIcon(fg: string) {
    let time = greeter();
    if (time === "morning" || time == "afternoon") {
        return `
        <path d="M226 148C226 142.477 230.477 138 236 138H291C296.523 138 301 142.477 301 148V202C301 207.523 296.523 212 291 212H236C230.477 212 226 207.523 226 202V148Z" fill="#151515" />
        <path d="M264 181.667C267.682 181.667 270.667 178.682 270.667 175C270.667 171.318 267.682 168.333 264 168.333C260.318 168.333 257.333 171.318 257.333 175C257.333 178.682 260.318 181.667 264 181.667Z" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M264 160.333V163" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M264 187V189.667" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M253.627 164.627L255.52 166.52" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M272.48 183.48L274.373 185.373" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M249.333 175H252" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M276 175H278.667" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M253.627 185.373L255.52 183.48" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M272.48 166.52L274.373 164.627" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        `
    } 
    else {
        return `
        <path d="M226 148C226 142.477 230.477 138 236 138H291C296.523 138 301 142.477 301 148V202C301 207.523 296.523 212 291 212H236C230.477 212 226 207.523 226 202V148Z" fill="#151515"/>
        <path d="M276 176.053C275.79 178.323 274.938 180.486 273.544 182.289C272.15 184.092 270.271 185.461 268.128 186.235C265.984 187.01 263.664 187.157 261.439 186.661C259.215 186.165 257.177 185.046 255.566 183.434C253.954 181.823 252.835 179.785 252.339 177.561C251.843 175.336 251.99 173.016 252.765 170.872C253.539 168.729 254.908 166.85 256.711 165.456C258.514 164.062 260.677 163.21 262.947 163C261.618 164.798 260.978 167.013 261.145 169.242C261.311 171.471 262.272 173.567 263.853 175.147C265.433 176.728 267.529 177.689 269.758 177.855C271.987 178.022 274.202 177.382 276 176.053V176.053Z" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `
    }
}

const renderGreeter = ({ text = "Oh, hello there fellah 👋!", bg = "0C0C0C", fg = "A0A0A0", subfg = "656464" }: GreeterProps) => {
    let icon = getIcon(fg);
    let greeting = capitalize(greeter());

    return `

        <svg width="1024" height="350" xmlns="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml">
            <rect width="1024" height="350" rx="10" fill="#${bg}" />
            <g filter="url(#filter0_d_3_2)">
                <path d="M321 204H739V211H321V204Z" fill="url(#paint0_linear_3_2)" />
            </g>
            <text fill="#${fg}" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="25" letter-spacing="0em">
                <tspan x="320" y="165.5">Good ${greeting} &#x2014; &#10;</tspan>
            </text>
            <text fill="#${subfg}" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="15" letter-spacing="0em">
                <tspan x="320" y="192.4">${text}.</tspan>
            </text>
            ${icon}
            <defs>
                <filter id="filter0_d_3_2" x="317" y="204" width="426" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_3_2" x1="321" y1="208" x2="739" y2="208" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9D7B7D" />
                <stop offset="0.2" stop-color="#7B9D7C" />
                <stop offset="0.4" stop-color="#B7976A" />
                <stop offset="0.6" stop-color="#687589" />
                <stop offset="0.8" stop-color="#937193" />
                <stop offset="1" stop-color="#628483" />
                </linearGradient>
            </defs>
        </svg>
  
    `
}

const _ = {
    greeter,
    renderGreeter
}
export default _;
