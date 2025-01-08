function Prop({name, id, isAccessible}) {
    return ( 
        <div>
            <h2>Hello {name} Your id is {id}  Accessbility {`${isAccessible}`}</h2>
        </div>
     );
}

export default Prop;