import Link from "next/link";
import React, { useContext } from "react";
import styles from "@/styles/Header.module.css";
import Search from "./Search";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/account/dashboard" className="btn">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/events/add" className="btn">
                  Add Event
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/account/login">
                <a className="btn-secondary btn-icon">
                  <FaSignInAlt /> Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
