import React from "react";
import Sidebar from "./Sidebar";
import Screenshot from "./Screenshot.png";
import Screenshot1 from "./Screenshot-1.png";

// import image1 from './image1.png';
// import image2 from './image2.png';
// import image3 from './image3.png';
// import image4 from './image4.png';
// import image5 from './image5.png';
// import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>Hooks</u></h1>

      <tr><h2 align="left"><u></u></h2>
      <h5>Hooks are a new addition in React 16.8. They let developers use state and other React features without writing a class For example- State of a component

It is important to note that hooks are not used inside the classes.</h5>
       </tr>
        <tr><h1 align="left">Important things to remember while using hooks:</h1>
        <li>Hooks are available for React version 16.8 or higher.</li>
        <li>Hooks are completely opt-in. Use it partially for a few components or base the whole project on it as per your needs without rewriting any existing code.</li>
          <li>Hooks don’t contain any breaking changes and are 100% backward-compatible.</li>
          <li>The react team has no plan to remove classes from React.</li>
          <li>Hooks can’t be used inside class components and but the app can definitely mix class-based components and functional components with Hooks.</li>
          <li>Hooks doesn’t violate any existing React concepts. Instead, Hooks provide a direct API to react concepts such as props, state, context, refs and life-cycle.</li>
       </tr>

      <tr><h4 align="left"><u>Hooks Rules</u></h4>
          <li>Hooks can only be called inside React function components.</li>
          <li>Hooks can only be called at the top level of a component.</li>
          <li>Hooks cannot be conditional</li>
          
      </tr>
      <tr><h1 align="left"><u>Types of Hook</u></h1>
      <li>UseState()</li>
      <li>UseEffect()</li>
      <li>UseContext()</li>
      <li>UseRef()</li>
      <li>UseReducer()</li>
      <li>UseCallback()</li>
      <li>UseMemo()</li>
</tr>
     <tr><h1 align="left">UseState()</h1>
 <p>The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
<h4><u>Example</u></h4>
<img src={Screenshot}/>
<h5>Output:</h5>
<img src={Screenshot1}/>
</p></tr>

     
      
         
        <tr>
         <p> <p>
            
          </p></p></tr>

       

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;