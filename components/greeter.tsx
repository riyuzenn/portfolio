/*
    This sourrce file handle the rendering of the greeter svg
*/

type GreeterProps = {
    text?: string;
    bg?: string;
    fg?: string;
    subfg?: string;
    morning?: string;
    afternoon?: string;
    evening?: string;
};
interface Time {
    hours: string;
    mins: string;
}

function changeTimeZone(date: any, timezone: string) {
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone: timezone,
        }),
      );
    }
  
    return new Date(
      date.toLocaleString('en-US', {
        timeZone: timezone,
      }),
    );
  }

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function greeter() {
    let current = changeTimeZone(new Date(), "Europe/Amsterdam");
    let hours = current.getHours();

    if (hours < 12) {
        return "morning";
    } else if (hours < 18) {
        return "afternoon";
    } else {
        return "evening";
    }
}

function getIcon(fg: string, bg: string) {
    let time = greeter();
    if (time === "morning" || time == "afternoon") {
        return `
        <path d="M226 148C226 142.477 230.477 138 236 138H291C296.523 138 301 142.477 301 148V202C301 207.523 296.523 212 291 212H236C230.477 212 226 207.523 226 202V148Z" fill="#151515"/>
        <path d="M264 181.667C267.682 181.667 270.667 178.682 270.667 175C270.667 171.318 267.682 168.333 264 168.333C260.318 168.333 257.333 171.318 257.333 175C257.333 178.682 260.318 181.667 264 181.667Z" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M264 160.333V163" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M264 187V189.667" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M253.627 164.627L255.52 166.52" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M272.48 183.48L274.373 185.373" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M249.333 175H252" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M276 175H278.667" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M253.627 185.373L255.52 183.48" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M272.48 166.52L274.373 164.627" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `;
    } else {
        return `
        <path d="M226 148C226 142.477 230.477 138 236 138H291C296.523 138 301 142.477 301 148V202C301 207.523 296.523 212 291 212H236C230.477 212 226 207.523 226 202V148Z" fill="#${bg}"/>
        <path d="M276 176.053C275.79 178.323 274.938 180.486 273.544 182.289C272.15 184.092 270.271 185.461 268.128 186.235C265.984 187.01 263.664 187.157 261.439 186.661C259.215 186.165 257.177 185.046 255.566 183.434C253.954 181.823 252.835 179.785 252.339 177.561C251.843 175.336 251.99 173.016 252.765 170.872C253.539 168.729 254.908 166.85 256.711 165.456C258.514 164.062 260.677 163.21 262.947 163C261.618 164.798 260.978 167.013 261.145 169.242C261.311 171.471 262.272 173.567 263.853 175.147C265.433 176.728 267.529 177.689 269.758 177.855C271.987 178.022 274.202 177.382 276 176.053V176.053Z" stroke="#${fg}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `;
    }
}

function convert(v: string) {
    if (v.length >= 2) return v;
    return v.padStart(2, "0");
}
function get_time(): Time {
    let date = changeTimeZone(new Date(), "Europe/Amsterdam");
    let hours = convert(date.getHours().toString());
    let mins = convert(date.getMinutes().toString());

    return { hours: hours, mins: mins };
}

const renderGreeter = ({
    bg = "0C0C0C",
    fg = "A0A0A0",
    subfg = "656464",
    morning = "Good morning fellah 👋",
    afternoon = "Good afternoon fellah 👋",
    evening = "Good evening fellah 👋",
}: GreeterProps) => {
    let icon = getIcon(fg, bg);
    let greeting = capitalize(greeter());
    let time = get_time();
    let greet = greeter();
    let text = "Oh, hello there fellah 👋!";
    switch (greet) {
        case "morning":
            if (!text) text = morning;
            break;

        case "afternoon":
            if (!text) text = afternoon;
            break;

        case "evening":
            if (!text) text = evening;
            break;
    }

    return `

        <svg width="1024" height="350" viewBox="0 0 1024 350" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml">
            <defs>
                <style type="text/css">@import url(http://fonts.googleapis.com/css?family=JetBrains+Mono);</style>
            </defs>
      
            <rect width="1024" height="350" rx="10" fill="#0C0C0C" />
            <g filter="url(#filter0_d_3_2)">
            <path d="M321 200H739V207H321V200Z" fill="url(#paint0_linear_3_2)" />
            </g>
            <text fill="#${fg}" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="25" letter-spacing="0em">
            <tspan x="382" y="161.5">Good ${greeting} &#x2014; &#10;</tspan>
            </text>
            <text fill="#${subfg}" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="15" letter-spacing="0em">
            <tspan x="382" y="188.4">${text}</tspan>
            </text>
            <text fill="#94847D" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="22" letter-spacing="0em">
            <tspan x="321" y="189.42">${time.mins}</tspan>
            </text>
            <text fill="#9C7C7D" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" font-size="22" letter-spacing="0em">
            <tspan x="321" y="160.42">${time.hours}&#10;</tspan>
            </text>
            ${icon}
            <line x1="362.5" y1="143" x2="362.5" y2="191" stroke="#${subfg}" />
            <defs>
            <filter id="filter0_d_3_2" x="317" y="200" width="426" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_3_2" x1="321" y1="204" x2="739" y2="204" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9D7B7D" />
                <stop offset="0.2" stop-color="#7B9D7C" />
                <stop offset="0.4" stop-color="#B7976A" />
                <stop offset="0.6" stop-color="#687589" />
                <stop offset="0.8" stop-color="#937193" />
                <stop offset="1" stop-color="#628483" />
            </linearGradient>
            </defs>
        </svg>
            

  
    `;
};

export default renderGreeter;
