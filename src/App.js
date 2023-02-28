import Navbar from "./components/Navbar";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="container">
      <Navbar />
      <General />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
