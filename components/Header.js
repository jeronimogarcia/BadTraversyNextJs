import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DJ Events</Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/events/add">Add Event</Link>
              </li>
              <button
                onClick={() => logout()}
                className="btn-secondary btn-icon"
              >
                <FaSignOutAlt />
                Log Out
              </button>
            </>
          ) : (
            <li>
              <Link href="/account/login" className="btn-secondary btn-icon">
                <FaSignInAlt />
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
