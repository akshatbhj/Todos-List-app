import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  let todos = [
    { sno: 1, title: "Task 1", desc: "Go to gym" },
    { sno: 2, title: "Task 2", desc: "Go to market" },
    { sno: 3, title: "Task 3", desc: "Go to mall" },
  ];

  const onDelete = () => {
    return console.log('I am onDelete')
  }

  return (
    <>
      <Header title="TodoApp" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
