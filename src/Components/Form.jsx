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
      <div className="row">
        <div className="col-9">
        <input className="form-control" type="text" placeholder="Eleman ekle" value={itemName} onChange={(e) => setItemName(e.target.value)}/>

        </div>
        <div className="col">
        <select className="form-select" onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({length:10}, (v,i) => i+1).map((num) => (
           <option key={num} value={num}>{num}</option>
        ))}      
      </select>
        </div>
        <div className="col-2">
        <button id="btnAdd" className="btn btn-primary" type="submit">Ekle</button>

        </div>
      
      </div>
      
    </form>
  )
}

export default Form
