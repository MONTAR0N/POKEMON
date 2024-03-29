import styles from './App.module.css';
//Views
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Detail";
//Components
import NavBar from "./components/NavBar/NavBar";
//Dependencies
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {



  const location = useLocation();
  return (
    <div className={styles.appContainer}>
    
      {location.pathname !== '/' && <NavBar/>}

      <Route exact path = '/' component={Landing} />

      <Route path='/home' component={Home} />
      
      <Route path='/detail/:id' component={Detail}/>
      
      <Route path='/create' component={Form}/>
      
    </div>
  );
}

export default App;
