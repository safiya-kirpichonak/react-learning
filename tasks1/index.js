// task 1

// ReactDOM.render(
//   <div>
//     <p>Products that I need to buy:</p>
//     <ul>
//       <li>12 eggs</li>
//       <li>3 applies</li>
//       <li>milk</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// task 2

// function NavBar() {
//   return (
//     <div>
//       <a>link 1</a>
//       <a>link 2</a>
//       <a>link 3</a>
//     </div>
//   );
// }

// ReactDOM.render(<NavBar />, document.getElementById("root"));

// task 3

// imperative way:

// const h1 = document.createElement("h1");
// h1.textContent = "Hello, React!";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);

// declarative way:

// ReactDOM.render(
//   <h1 class="header">Hello, React!</h1>,
//   document.getElementById("root")
// );

// task 4

// difference between JSX and regular DOM elements

// const domH1 = document.createElement("h1");
// domH1.textContent = "Hello, JSX!";
// console.log(domH1); // simple string <h1>Hello, JSX!</h1>

// const jsxH1 = <h1>Hello, JSX!</h1>;
// console.log(jsxH1); // JavaScript object:

/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "children": "Hello, JSX!"
    },
    "_owner": null,
    "_store": {}
}
*/

// task 5

// const nav = (
//   <nav>
//     <h1>My website</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(nav, document.getElementById("root"));
