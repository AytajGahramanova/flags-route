import { Button, Navbar } from "./style.js";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Navbar>
      <div>
        <h3 style={{ color: isDarkMode ? "#fff" : "#000" }}>
          Where in the world?
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {isDarkMode ? (
          <DarkModeIcon style={{ color: "#fff" }} />
        ) : (
          <LightModeIcon />
        )}
        <Button
          style={{ color: isDarkMode ? "#fff" : "#000" }}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;
