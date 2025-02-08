
const ListItem = ({ item, onDeleteItem,  onUpdateItem}) => {
  return (
    
    <div>
        {console.log(item)}
      <li className="list-group-item d-flex justify-content-between" >
        <div>
        <input type="checkbox"
        className="form-check-input me-2"
        checked={item.completed}
        onChange={() => onUpdateItem(item.id)} />
        &nbsp;
      <span style={item.completed ? {textDecoration:"line-through"}: {}}>{item.title} - {item.quantity} </span>
        </div>
        
      <button className="btn btn-sm btn-danger" onClick={() => onDeleteItem(item.id)}>X</button>
    </li> 
    </div>
  )
}

export default ListItem
