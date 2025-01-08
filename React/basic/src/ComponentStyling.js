function ComponentStyling({num}) {
    return ( 
        <div>
            <h1 style={{color: num>0 ? "Yellow": "Red"}}>
                Dynamic Component Styling
            </h1>
        </div>
    );
}

export default ComponentStyling;