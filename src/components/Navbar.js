import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../components/context/ThemeContext";
import Gear from "../components/icons/Gear";

export default function Navbar() {
  // Settings handling
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Theme handling
  const { theme, setTheme } = useThemeContext();

  // Function to switch theme
  const handleSwitch = () => {
    setTheme((state) => (state === "Blue" ? "Dark" : "Blue"));
  };

  // Use Location for Logo or Back Home Component
  const location = useLocation();
  const isStartPage = location.pathname === "/";

  // Set the default theme when the component is mounted
  useEffect(() => {
    if (theme !== "Dark" && theme !== "Blue") {
      setTheme("Blue"); // Set your default theme here (e.g., "Dark")
    }
  }, [theme, setTheme]);

  return (
    <div className="navbar" id={theme}>
      <div className="navbarWrapper">
        <div className="navigation">
          {isStartPage ? (
            <p>FortiConfigurator</p>
          ) : (
            <Link to="/">Back home</Link>
          )}
        </div>

        <div className="settings" onClick={handleMenuClick}>
          <Gear />
          {menuOpen && (
            <div className="settingItems">
              <p>change style:</p>
              <button onClick={handleSwitch}>
                {theme === "Blue" ? "Dark" : "Blue"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
