import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoProvider from "./context/TodoProvider";
function App()
{
  return(
      <BrowserRouter>
          <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/todos" element={<TodoProvider><Todos/></TodoProvider>}></Route>
        </Routes>
      </BrowserRouter>
  )

}

export default App
