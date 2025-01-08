function EventHandling() {
    function handleClick(){
        console.log(`The button is clicked!`);
    }
    function handleMouseOver(){
        console.log(`Mouse Over handler.`);
    }
    function handleDoubleClick(){
        console.log(`Double CLick handler.`);
    }

    return ( 
        <div>
            <button onClick={handleClick}>Click me!</button>

            <h1 onMouseOver={handleMouseOver}>Mouse Over Event</h1>

            <button onDoubleClick={handleDoubleClick}>Double click!</button>
        </div>
     );
}

export default EventHandling;