import { Link } from "react-router-dom";
import { useUserStore } from "../../store/useStore";

const Header = () => {
  const user = useUserStore((state) => state.user);
  const signOut = useUserStore((state) => state.signOut);
  return (
    <div className="bg-gray-300 text-black rounded-t-xl">
      <nav className="flex justify-between">
        <img src="https://picsum.photos/100/50.jpg" />
        <ul className="flex gap-5 p-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
