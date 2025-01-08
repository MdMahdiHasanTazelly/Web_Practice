function PropArray({arr, obj}) {
    return ( 
        <div>
            <ul>
                {arr.map( (el)=> <li>{el}</li>)}

                {/* object be read as individual element */}
                {obj.a}
            </ul>
        </div>
     );
}

export default PropArray;