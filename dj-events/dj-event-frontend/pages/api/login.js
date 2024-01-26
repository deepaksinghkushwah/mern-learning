import { API_URL } from "@/config/index";
import cookie from "cookie";
const login = async (req, res) => {
  if (req.method == "POST") {
    const { email, password } = req.body;
    const p = await fetch(`${API_URL}/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await p.json();
    console.log(data);
    if (p.ok) {
      // set cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60*60*24 * 7, //a week
          sameSite: 'strict',
          path: '/'
        })
      );
      res.status(200).json({ user: data.user });
    } else {
      res.status(403).json({ ok: false, message: "Invalid email or password" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `${req.method} not allowed` });
  }
};

export default login;
