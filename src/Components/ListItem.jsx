/* eslint-disable react/prop-types */

const ListItem = ({ item, onDeleteItem}) => {
  return (
    
    <div>
        {console.log(item)}
      <li className="mt-2">
      <span style={item.completed ? {textDecoration:"line-through"}: {}}>{item.title} - {item.quantity} </span>
      <button className="btn btn-sm btn-danger" onClick={() => onDeleteItem(item.id)}>X</button>
    </li> 
    </div>
  )
}

export default ListItem
