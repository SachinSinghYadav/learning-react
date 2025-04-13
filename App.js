/*
    <div id='parent'>
    
        <div id='child1'>
            <h1>
                H1 Tag
            </h1>
            <h2>
                H1 Tag
            </h2>
        </div>

        <div id='child2'>
            <h1>
                H1 Tag
            </h1>
            <h2>
                H1 Tag
            </h2>
        </div>

    </div>

 */

const NestedStructure = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(NestedStructure);
