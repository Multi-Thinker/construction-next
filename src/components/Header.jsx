import { useState } from "react";
import whiteLogo from "../assets/logo-white.png";
import { Chevron, Lock, Phone } from "./icons";

export default function Header({ route, setMenuOpen, menuOpen, navGroups }) {
  const [openGroup, setOpenGroup] = useState(null);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="site-header">
      <a className="header-logo" href="#/" onClick={closeMenu}>
        <img src={typeof whiteLogo === "string" ? whiteLogo : whiteLogo.src} alt="" width="500" height="500" />
        <span className="header-brand-text">
          Top Construction
          <br />
          <em>&amp; Design</em>
        </span>
        <span className="sr-only">Top Construction and Design</span>
      </a>
      <button
        className={`menu-button ${menuOpen ? "menu-close" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? (
          <>
            <span aria-hidden="true">Ã—</span>
            <span className="sr-only">Close menu</span>
          </>
        ) : (
          "Menu"
        )}
      </button>
      <nav
        id="primary-navigation"
        className={menuOpen ? "nav-open" : ""}
        aria-label="Primary navigation"
      >
        <a
          className={route === "home" ? "active-route" : ""}
          href="#/"
          onClick={closeMenu}
        >
          Home
        </a>
        {navGroups.map((group) => (
          <div
            className={`nav-group ${openGroup === group.slug ? "submenu-open" : ""}`}
            key={group.slug}
            onMouseEnter={() => group.children && setOpenGroup(group.slug)}
            onMouseLeave={() => group.children && setOpenGroup(null)}
          >
            <a
              className={route === group.slug ? "active-route" : ""}
              href={group.slug === "services" ? "/general-construction/" : `#/${group.slug}`}
              onClick={closeMenu}
            >
              {group.label}
            </a>
            {group.children && (
              <button
                className="submenu-toggle"
                type="button"
                aria-label={`Show ${group.label} menu`}
                aria-expanded={openGroup === group.slug}
                aria-controls={`${group.slug}-submenu`}
                onClick={() =>
                  setOpenGroup(openGroup === group.slug ? null : group.slug)
                }
              >
                <Chevron />
              </button>
            )}
            {group.children && (
              <div className="submenu" id={`${group.slug}-submenu`}>
                {group.children.map((child) => child === "General Construction" ? (
                  <a className="disabled-submenu-link available-submenu-link" key={child} href="/general-construction/" onClick={closeMenu}>{child}</a>
                ) : (
                  <button className="disabled-submenu-link" key={child} type="button" disabled title="This page has not been rebuilt yet"><Lock />{child}</button>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          className="privacy-link"
          type="button"
          disabled
          title="This page has not been rebuilt yet"
        >
          <Lock />
          Privacy Policy
        </button>
      </nav>
      <a className="phone-button" href="tel:+19543182322">
        <Phone />
        954-318-2322
      </a>
    </header>
  );
}
