import { useState } from "react";
import { useUserStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = useUserStore((state) => state.signIn);
  const navigate = useNavigate();
  const handleLogin = async() => {
    const status = await signin(email, password);
    if (status) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <h3 className="text-2xl text-center">Login</h3>
      <hr className="headingHr" />
      <div className="m-auto w-[400px] rounded p-3 flex flex-row justify-center bg-slate-400">
        <table className="">
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id="email"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id="password"
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button onClick={() => handleLogin()} className="button">
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Login;
