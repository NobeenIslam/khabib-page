import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { FormidableOpponents } from "./components/FormidableOpponents";
import { Home } from "./components/Home";
import { MovesList } from "./components/MovesList";
import { NavBar } from "./components/NavBar";

function App(): JSX.Element {
  const [pageView, setPageView] = useState<string>("Home");
  const [moveView, setMoveView] = useState<number>(0);

  return (
    <main>
      <NavBar setPageView={setPageView} setMoveView={setMoveView} />
      {pageView === "Home" && <Home />}
      {pageView === "About" && <About />}
      {pageView === "Moves-List" && (
        <MovesList moveView={moveView} setMoveView={setMoveView} />
      )}
      {pageView === "Formidable-Opponents" && <FormidableOpponents />}
      <Footer />
    </main>
  );
}

export default App;
