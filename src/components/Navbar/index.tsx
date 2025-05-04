import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { NavbarProps } from './types';
import { NAV_LINKS } from './data';

export default function Navbar({ name, role }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <NavLink
            className={`navbar-brand d-flex align-items-center ${styles.navbarBrandName}`}
            to="/"
          >
            <h5 className={`m-0 ${styles.name}`}>{name}</h5>
            <span className={`${styles.role}`}>{role}</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-sm-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NAV_LINKS.map(({ path, label }) => (
                <li className={`nav-item ${styles.navItem}`} key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }: { isActive: boolean }) =>
                      `${isActive ? 'active' : ''} ${styles.navLink}`
                    }
                    // className={`${styles.navLink}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
