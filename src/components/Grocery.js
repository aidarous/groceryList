import React, {useState} from 'react'
import GroceryForm from './GroceryForm'

const Grocery = ({groceries, completeItem, removeItem, updateItem}) => {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    });
}

const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
        id:null, value: ''
    })
}

if (edit.id) {
    return <GroceryForm edit={edit} onSubmit={submitUpdate} />
}

return groceries.map((grocery,index) => (
    <div key={index}>
        
    </div>
    
)

)

function Grocery() {
    const[edit, setEdit] = useState({
        id:null,
        value: ''
    })

    return groceries.map() 
    }
    

    export default Grocery;