import Prop from "./Prop.js";
import PropArray from "./PropArray.js";
import Conditionals from "./Conditionals.js";
import ComponentStyling from "./ComponentStyling.js";
import EventHandling from "./EventHandling.js";
import WorkingRerender from "./WorkingRerender.js";
import CallbackInStateFunc from "./CallbackInStateFunc.js";
import ObjectAsStateVar from "./ObjectAsStateVar.js";

function App() {
  return (
    <div className="App">
      {/* passing string, number boolean type as prop */}
      <Prop name="Mahdi" id={123} isAccessible={true} />

      {/* Prop as array and object*/}
      <PropArray  arr={[1, 2, 3]} obj={{a: "smooth", b: "easy"}}/>


      {/* Conditionals */}
      <Conditionals price={40}/>


      {/* Component styling using condition */}
      <ComponentStyling num={-1}/>


      {/* Event Handling */}
      <EventHandling/>


      {/* how re-rendering works in react */}
      <WorkingRerender />

      {/* to make change in state variable one after another*/}
      <CallbackInStateFunc />


      {/* Working of objec as a state variable */}
      <ObjectAsStateVar />

    </div>
  );
}

export default App;
