import ListItem from "./ListItem"
import { items } from "../items.js"

const List = () => {
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
