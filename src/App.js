import MenuBar from "./components/MenuBar";
import Route from "./components/Route";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import { useContext } from "react";
// import NavigationContext from "./context/Navigation";
function App() {
  // const { currentPath } = useContext(NavigationContext);
  // console.log(currentPath);
  //const path = ;
  return (
    <div className="bg-primary bg-indigo-100 w-full overflow-hidden">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <MenuBar/>
      </div>
      <div>
      <Route path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/education"><Education /></Route>
      <Route path="/skills"><Skills /></Route>
      <Route path="/experience"><Experience /></Route>
      <Route path="/contact"><Contact /></Route>
      </div>
    </div>
  );
}

export default App;
