/*
    API route for greet card.
*/

import { NextApiRequest, NextApiResponse } from "next";
import _ from "../../lib/greeter";

type ResData = {
    error?: any;
    code?: string;
};
type Parameters = {
    text?: string;
    bg?: string;
    fg?: string;
    subfg?: string;
    morning?: string;
    afternoon?: string;
    evening?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
    const params: Parameters = req.query;
    let svg = "";
    let text = params.text;
    let time = _.greeter();

    switch (time) {
        case "morning":
            if (!text) text = params.morning;
            break;

        case "afternoon":
            if (!text) text = params.afternoon;
            break;

        case "evening":
            if (!text) text = params.evening;
            break;
    }

    svg = _.renderGreeter({
        text: text,
        bg: params.bg,
        fg: params.fg,
        subfg: params.subfg,
    });
    console.log(_.get_time());
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.setHeader("content-security-policy", "default-src 'none'; img-src * data:; style-src 'unsafe-inline'");
    res.status(200).send(svg as any);
}
