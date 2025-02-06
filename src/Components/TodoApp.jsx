import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import { products } from "../products";

const TodoApp = () => {
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <List items={items} onDeleteItem={handleDeleteItem}/>
      <Summary />
    </div>
  );
};
export default TodoApp;


const Summary = () => {
  return <div>Alışveriş sepetinizde 10 ürün bulunmaktadır.</div>;
};
