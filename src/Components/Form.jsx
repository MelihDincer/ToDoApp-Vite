/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({onAddItem}) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleFormSubmit(e){
        e.preventDefault();

        const product = {
            id: Date.now(),
            title: itemName,
            quantity: quantity,
            completed: false
        };

        console.log(product);

        onAddItem(product);

        setItemName("");
        setQuantity(1);        
    }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Eleman ekle" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
      <select onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({length:10}, (v,i) => i+1).map((num) => (
           <option key={num} value={num}>{num}</option>
        ))}
        
      </select>
      <button type="submit">Ekle</button>
    </form>
  )
}

export default Form
