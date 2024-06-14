
     
// const heading = React.createElement("h1",{},"Hello world from Raect")

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

const parent = React.createElement(
    "div",
    {id: "child"},
    React.createElement(
        "div",
        {id: "child"},
       [ React.createElement("h1",{},"I am An h1 tag"), React.createElement("h2",{},"I am An h2 tag")]
    ),
    React.createElement(
        "div",
        {id: "child"},
       [ React.createElement("h1",{},"I am An h1 tag"), React.createElement("h2",{},"I am An h2 tag")]
    )
    
)

//jsx exist tu cure these problem

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)




