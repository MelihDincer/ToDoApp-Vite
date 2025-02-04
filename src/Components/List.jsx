import ListItem from "./ListItem"

const List = ({items}) => {
  return (
    <div className="list">
    <ul>
      {items.map((p, index) => (
        <ListItem item={p} key={index} />
      ))}
    </ul>
  </div>
  )
}

export default List
