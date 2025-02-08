import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import { products } from "../products";

const TodoApp = () => {
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container my-3">
      <div className="card">
      <Header />
      <div className="card-body">
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      </div>
      
      <Summary items={items} />
    </div>
    </div>
  );
};
export default TodoApp;

const Summary = ({ items }) => {
  const itemsCount = items.length;
  const completedItemsCount = items.filter((i) => i.completed).length;
  if (completedItemsCount === 0 ) return null;

  return (   
    <footer className="card-footer bg-light">
      {itemsCount === completedItemsCount ? (
        <p className="mb-0 ms-2">☺ Alışveriş tamamlandı ♥</p>
      ) : (
        <p className="mb-0 ms-2 text-dark">
          Alışveriş sepetinizdeki {itemsCount} üründen {completedItemsCount}{" "}
          tanesini seçtiniz.
        </p>
      ) }
      
    </footer>
  );
};



