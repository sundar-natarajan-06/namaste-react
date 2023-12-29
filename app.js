const heading1 = React.createElement("h1", { id: "heading" }, "React heading!");
const heading2 = React.createElement("h2", { id: "heading2" }, "React heading2!");
const child1 = React.createElement("div", { id: "child1" }, [heading1, heading2]);
const child2 = React.createElement("div", { id: "child2" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);