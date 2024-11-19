import logo from "./logo.svg";
import "./App.css";
import MovieActors from "./components/MovieActors";

function App() {
  return (
    <div className="App">
      <h1 className="actorMovie">Actors Movies Review</h1>
      <hr></hr>
      <div className="prabhasMovie">
        <h1>Name: Prabhas</h1>
        <img src="./images/prabhas.jpg"></img>
        <h2 className="hitMovie">Hit Movie: Bahubali</h2>
        <h2 className="hitMovie">Flop Movie: Chakram</h2>
      </div>
      <div className="prabhasMovie">
        <h1>Name: Ram Pothineni</h1>
        <img src="./images/ramPothineni.jpg"></img>
        <h2 className="hitMovie">Hit Movie: Ready</h2>
        <h2 className="hitMovie">Flop Movie: Skanda</h2>
      </div>
      <div className="prabhasMovie">
        <h1>Name :Nani</h1>
        <img src="./images/Nani.jpg"></img>
        <h2 className="hitMovie">Hit Movie: Jersey</h2>
        <h2 className="hitMovie">Flop Movie: Tuck Jagadish</h2>
      </div>
      <div className="prabhasMovie">
        <h1>Name: Jr.Ntr</h1>
        <img src="./images/jrNtr.jpg"></img>
        <h2 className="hitMovie">Hit Movie: Devara</h2>
        <h2 className="hitMovie">Flop Movie: Rabhasa</h2>
      </div>
      <hr></hr>
      <MovieActors
        Name="Ram Charan"
        Hit="Dhruva"
        Flop="Orange"
        imgURL="./images/ramCharan.jpg"
      ></MovieActors>
      <MovieActors
        Name="Allu Arjun"
        Hit="Arya"
        Flop="Happy"
        imgURL="./images/alluArjun.jpg"
      ></MovieActors>
      <MovieActors
        Name="Vijay Devarakonda"
        Hit="Arjun Reddy"
        Flop="Dear Comrade"
        imgURL="./images/vijayDevarakonda.jpg"
      ></MovieActors>
      <MovieActors
        Name="Varun Tej"
        Hit="Fidaa"
        Flop="Loafer"
        imgURL="./images/varunTej.jpg"
      ></MovieActors>
    </div>
  );
}

export default App;
