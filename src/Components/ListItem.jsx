
const ListItem = ({ item }) => {
  return (
    
    <div>
        {console.log(item)}
      <li className="mt-2">
      <span style={item.completed ? {textDecoration:"line-through"}: {}}>{item.title} - {item.quantity} </span>
      <button className="btn btn-sm btn-danger">X</button>
    </li> 
    </div>
  )
}

export default ListItem
