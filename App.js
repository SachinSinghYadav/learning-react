const Message = ({ message, children }) => {
  return React.createElement("h1", { id: "heading" }, message, children);
};

const Heading = React.createElement(
  Message,
  { message: "Hello, React" },
  React.createElement("div", {}, "I am learning you in details")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);
