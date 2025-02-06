/* eslint-disable react/prop-types */
import ListItem from "./ListItem"

const List = ({items, onDeleteItem}) => {
  return (
    <div className="list">
      {items.length>0 ? (
        <ul>
      {items.map((p, index) => (
        <ListItem item={p} key={index} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
      ) : 
      (<p>Eleman yok.</p>)}
    
  </div>
  )
}

export default List
