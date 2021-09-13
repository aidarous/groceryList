import React, {useState} from 'react'

function GroceryForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
      setInput('');  
    };
    return (
        <div>
            <form className="grocery-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add grocery item" value={input} name="text" className="grocery-input" onChange={handleChange}/>
                <button className="grocery-button">Add grocery</button>
            </form>

        </div>
    )
}

export default GroceryForm;