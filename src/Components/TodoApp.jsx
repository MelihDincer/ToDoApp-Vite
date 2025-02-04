import Form from "./Form";
import Header from "./Header";
import List from "./List";



const TodoApp = () => {
  return (
    <div className="container">
      <Header />
      <Form />
      <List />
      <Summary />
    </div>
  );
};
export default TodoApp;


const Summary = () => {
  return <div>Alışveriş sepetinizde 10 ürün bulunmaktadır.</div>;
};
