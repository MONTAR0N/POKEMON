//Views
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Detail";
//Components
import NavBar from "./components/NavBar/NavBar";
//Dependencies
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import axios from 'axios';

const App = () => {
// const onSearch = async (id) => {
//   try {
//     const {data} = await axios.get(`http://localhost:3001/pokemon/pokemon/${id}`)
// if(data.name) {
//   const 
// }
//   } catch {
    
//   }
// }



  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== '/' && <NavBar/>}

      <Route exact path = '/' component={Landing} />

      <Route path='/home' component={Home} />
      
      <Route path='/detail' component={Detail}/>
      
      <Route path='/create' component={Form}/>
      
    </div>
  );
}

export default App;
