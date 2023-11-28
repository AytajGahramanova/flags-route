import { Button, Navbar } from "./style.js";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Navbar>
      <div>
        <h3 style={{ color: isDarkMode ? "white" : "black" }}>
          Where in the world?
        </h3>
      </div>
      <div>
        <Button
          style={{ color: isDarkMode ? "white" : "black" }}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;
