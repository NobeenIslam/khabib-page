import kAnnouncement from "../audio/kAnnouncement.mp3";
import kHamd from "../audio/kHamd.mp3";
import kLocation from "../audio/kLocation.mp3";
import kSmash2 from "../audio/kSmash2.mp3";

interface NavBarProps {
  setPageView: (arg0: string) => void;
  setMoveView: (arg0: number) => void;
}

export function NavBar({ setPageView, setMoveView }: NavBarProps): JSX.Element {
  const announceMentSound = new Audio(kAnnouncement);
  const hamdSound = new Audio(kHamd);
  const locationSound = new Audio(kLocation);
  const smashSound = new Audio(kSmash2);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <button
            className="nav-link btn customFont"
            onClick={() => {
              hamdSound.play();
              setPageView("About");
            }}
          >
            About
          </button>
          <button
            className="nav-link btn customFont"
            onClick={() => {
              smashSound.play();
              setPageView("Moves-List");
              setMoveView(0);
            }}
          >
            Moves List
          </button>
          <button
            className="nav-link btn customFont"
            onClick={() => {
              locationSound.play();
              setPageView("Formidable-Opponents");
            }}
          >
            {" "}
            Formidable Opponents
          </button>
        </div>
        <img
          src="images/eagle.png"
          alt=""
          className="navbar-brand nav--logo btn"
          onClick={() => {
            announceMentSound.play();
            setPageView("Home");
          }}
        />
      </div>
    </nav>
  );
}
