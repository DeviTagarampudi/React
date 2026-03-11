
const parentEle= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
     [React.createElement("h1",{id:"child"},"I am the h1 tag"),
    React.createElement("h1",{id:"child"},"I am the h1 tag")]
    ),React.createElement("div",{id:"child2"},
     [React.createElement("h2",{id:"child"},"I am the h1 tag"),
    React.createElement("h2",{id:"child"},"I am the h1 tag")]
    )])
console.log(parentEle);
ReactDOM.createRoot(document.getElementById("root")).render(
    parentEle
);