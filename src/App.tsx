import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
