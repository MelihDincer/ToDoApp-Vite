import { useState } from "react";

const Form = () => {
    const [itemName, setItemName] = useState("aa");
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState(items);

    function handleFormSubmit(e){
        e.preventDefault();

        const product = {
            id: Date.now(),
            title: itemName,
            quantity: quantity,
            completed: false
        };

        console.log(product);
        setItemName("");
        setQuantity(1);        
    }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Eleman ekle" />
      <select>
        {Array.from({length:10}, (v,i) => i+1).map((num) => (
           <option key={num} value={num}>{num}</option>
        ))}
        
      </select>
      <button className="btn btn-sm-info"></button>
    </form>
  )
}

export default Form
