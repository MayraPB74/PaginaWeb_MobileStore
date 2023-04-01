import React, { useState }  from "react";
import {Header} from "./componentes/Header";
import { ProductosLista } from"./componentes/productos/index"
import 'boxicons';
import Body from "./componentes/body/body";
import Footer from "./componentes/footer/footer";
import { Login} from"./componentes/Header/Login/Login";
import { Register} from"./componentes/Header/Login/Register";


function App() {

     {/*const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }*/}
  return (
    
    <div className="App">
     {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }*/}
      <Header/>
      <ProductosLista />
      <Footer/>

       
    </div>
  );
}

export default App;
