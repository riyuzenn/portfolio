/*
    API route for greet card.
*/

import { NextApiRequest, NextApiResponse } from "next";
import renderGreeter from "../../components/greeter";

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

    svg = renderGreeter({
        bg: params.bg,
        fg: params.fg,
        subfg: params.subfg,
        morning: params.morning,
        afternoon: params.afternoon,
        evening: params.evening,
    });

    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.setHeader("content-security-policy", "default-src 'none'; img-src * data:; style-src 'unsafe-inline'");
    res.status(200).send(svg as any);
}
