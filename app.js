import React from "react";
import ReactDOM from "react-dom/client";

// ✅ React element
//React.createElement => ReactElement-JS Object =>HTML(render)
const heading = React.createElement("h1", {}, "Namaste React!");
console.log(heading);

// ✅ JSX version
//JSX=> babel transpiles in to (React.createElement=>ReactElement-JS Object =>HTML(render))


//React Functional Component
const Title =()=>(<h1 id="heading">Namaste React using JSX 🚀</h1>)

//with normal function(without arrow function)
const Para=function(){
   return (
   <h2>hello</h2>
)
};

//Component composition
const HeadingComponent1=()=> (
    <div id="container">
        {/* {Title()}
        <Title/>
        <Title></Title> */}
        <Para/>
        <h1 className="heading">Namaste React functional component</h1>
    </div>
);

// ✅ Create root & render it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1/>);
