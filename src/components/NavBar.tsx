export function NavBar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <button className="nav-link btn customFont">About</button>
          <button className="nav-link btn customFont">Moves List</button>
          <button className="nav-link btn customFont">
            {" "}
            Formidable Opponents
          </button>
        </div>
        <img
          src="images/eagle.png"
          alt=""
          className="navbar-brand nav--logo btn"
        />
      </div>
    </nav>
  );
}
