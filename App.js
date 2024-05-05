import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/** 
 * <div id="parent">
    <div id="child">
        <h1>Hii</h1>
        <h2>How are you?</h2>
    </div>
</div> 
*/

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello"), React.createElement("h2", {}, "How are you?")]))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
