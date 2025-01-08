function Conditionals({price}) {
    return ( 
        <div>
            {/* Even if the condition isn't satisfied DOM will create a node 
            It's a cons*/}
            <p>{price>20 ? "Purchase": null}</p>

            {/* If the condition isn't satisfied no node will be created */}
            {price>20 ? <p>Purchase</p>: null}

            {/* This is the more simplifies way to check conditionals */}
            {price>20 && <p>Purchase</p>}
        </div>
    );
}

export default Conditionals;