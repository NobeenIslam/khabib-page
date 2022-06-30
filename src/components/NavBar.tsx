interface NavBarProps {
  setPageView: (arg0: string) => void;
}

export function NavBar({ setPageView }: NavBarProps): JSX.Element {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <button
            className="nav-link btn customFont"
            onClick={() => setPageView("About")}
          >
            About
          </button>
          <button
            className="nav-link btn customFont"
            onClick={() => setPageView("Moves-List")}
          >
            Moves List
          </button>
          <button
            className="nav-link btn customFont"
            onClick={() => setPageView("Formidable-Opponents")}
          >
            {" "}
            Formidable Opponents
          </button>
        </div>
        <img
          src="images/eagle.png"
          alt=""
          className="navbar-brand nav--logo btn"
          onClick={() => setPageView("Home")}
        />
      </div>
    </nav>
  );
}
