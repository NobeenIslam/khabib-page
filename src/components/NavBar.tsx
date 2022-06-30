interface NavBarProps {
  setPageView: (arg0: string) => void;
  setMoveView: (arg0: number) => void;
}

export function NavBar({ setPageView, setMoveView }: NavBarProps): JSX.Element {
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
            onClick={() => {
              setPageView("Moves-List");
              setMoveView(0);
            }}
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
