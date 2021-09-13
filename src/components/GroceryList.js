import React, {useState} from 'react';
import GroceryForm from './GroceryForm';



function GroceryList() {
    const [groceries, setGroceries] = useState([])

    const addGrocery = grocery => {
        if(!grocery.text || /^\s*$/.test(grocery.text)){
            return <p>{groceries}</p>
        }

        const newGroceries = [grocery, ...groceries]
        
        setGroceries(newGroceries);
        console.log(...groceries);
    }

    return (
        <div>
            <h1>Grocery shopping list</h1>
            
            <GroceryForm onSubmit={addGrocery} />
        </div>
    )
}

export default GroceryList;