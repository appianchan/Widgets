import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock"
import Tab from "./tab";


const tabs = [
    {title: "Frogs", content: "frogs are cute"},
    {title: "Cats", content:"cats are awesome"},
    {title: "Bearded Dragons", content: "I like beards"}
]

function Root() {
  return (
    <div>
      <Clock />
      <Tab tabs={tabs}/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("main"));
});
