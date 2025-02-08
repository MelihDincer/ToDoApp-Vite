import ListItem from "./ListItem";
import "../style.css";

const List = ({ items, onDeleteItem, onUpdateItem }) => {
  return (
    <div className="list">
      {items.length > 0 ? (
        <ul className="list-group mt-3">
          {items.map((p, index) => (
            <ListItem
              item={p}
              key={index}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-danger">Ürün bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default List;
