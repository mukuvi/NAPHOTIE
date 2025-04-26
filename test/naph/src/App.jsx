import "./App.css";
import Home from "./pages/Home";
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import BiodiversityMap from "./Components/sections/BiodiversityMap";
import ConservationImpact from "./Components/sections/ConservationImpact";
import SafariExperience from "./Components/sections/SafariExperience";
import WildlifeGrid from "./Components/sections/WildlifeGrid";
import Flora from "./Components/sections/Flora";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <WildlifeGrid />
        <Flora />
        <ConservationImpact />
        <BiodiversityMap />
        <SafariExperience />
        <Footer />
      </div>
    </>
  );
}

export default App;
