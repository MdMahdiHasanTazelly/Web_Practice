import Prop from "./Prop.js";
import PropArray from "./PropArray.js";
import Conditionals from "./Conditionals.js";

function App() {
  return (
    <div className="App">
      {/* passing string, number boolean type as prop */}
      <Prop name="Mahdi" id={123} isAccessible={true} />

      {/* Prop as array and object*/}
      <PropArray  arr={[1, 2, 3]} obj={{a: "smooth", b: "easy"}}/>


      {/* Conditionals */}
      <Conditionals price={40}/>

    </div>
  );
}

export default App;
