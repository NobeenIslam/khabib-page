import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { FormidableOpponents } from "./components/FormidableOpponents";
import { Home } from "./components/Home";
import { MovesList } from "./components/MovesList";
import { NavBar } from "./components/NavBar";

function App(): JSX.Element {
  const [pageView, setPageView] = useState<string>("Home");

  return (
    <main>
      <NavBar setPageView={setPageView} />
      {pageView === "Home" && <Home />}
      {pageView === "About" && <About />}
      {pageView === "Moves-List" && <MovesList />}
      {pageView === "Formidable-Opponents" && <FormidableOpponents />}
      <Footer />
    </main>
  );
}

export default App;
