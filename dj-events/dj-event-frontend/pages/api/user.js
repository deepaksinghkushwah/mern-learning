import { API_URL } from "@/config/index";
import jwt_decode from 'jwt-decode';

import cookie from "cookie";
const user = async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not authorized" });
      return;
    }

    // get token and fetch user from that token, right now
    // I just used admin user id to fetch token as I do not
    // have any backend server except json-server
    const { token } = cookie.parse(req.headers.cookie);
    if(!token){
      res.status(403).json({ message: "Invalid access token" });
      return
    }
    var decoded = jwt_decode(token);
    const callRes = await fetch(`${API_URL}/users?email=${decoded.email}`);
    const user = await callRes.json();
    if (callRes.ok) {
      res.status(200).json({ user: user[0] });
    } else {
      res.status(403).json({ message: "Invalid access token" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `${req.method} not allowed` });
  }
};

export default user;
