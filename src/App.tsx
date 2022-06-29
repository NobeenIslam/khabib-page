import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

function App(): JSX.Element {
  return (
    <main>
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
