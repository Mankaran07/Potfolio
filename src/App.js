import { Home, About, Skills, Project, Contact, Footer } from "./Pages/index";
import { Float, Navbar, Loader, Sidebar } from "./Components/index";
import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ReactTooltip
            className="tooltip"
            effect="solid"
            place="bottom"
            clickable={true}
          />
          <Navbar />
          <Sidebar />
          <main>
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
          </main>
          <Float />
        </>
      )}
    </div>
  );
}

export default App;
