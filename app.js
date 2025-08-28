//we created only one element

const heading=React.createElement
("h1",{id:"heading"},"Hello World!");
console.log(heading);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>i'm h1 tag</h1>
    </div>
</div> */}

const container=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag" ),React.createElement("h2",{},"I'm an h2 tag" )])],
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'm an h1 tag" ),React.createElement("h2",{},"I'm an h2 tag" )])]);

const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(container);