import type { NextApiRequest, NextApiResponse } from "next";
import { serverHttp } from "services/http";
import requestIp from "request-ip";
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const token = await getToken({ req, secret: "testSecret" });
  const accessToken = token ? token.accessToken : "";
  const url = req.url;
  const method = req.method;
  const data = req.body;
  const ip = requestIp.getClientIp(req) || "ipError";

  if (url && method) {
    console.log(url);
    const response = await serverHttp.request({
      url,
      method,
      data,
      headers: { "x-real-ip": ip, authorization: `Bearer ${accessToken}` },
    });
    res.status(response.status).json(response.data);
  }

  if (!url || !method) {
    res.status(500).json({ message: "Request must contain an url and method" });
  }
}
