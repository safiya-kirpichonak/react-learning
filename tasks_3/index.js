// task "Counter"

// function Count({ number }) {
//   return <p>{number}</p>;
// }

// function App() {
//   const [number, setNumber] = React.useState(0);

//   const addHandler = () => setNumber((oldNumber) => oldNumber + 1);
//   const subtractHandler = () => setNumber((oldNumber) => oldNumber - 1);

//   return (
//     <div>
//       <Count number={number} />
//       <button onClick={addHandler}>+</button>
//       <button onClick={subtractHandler}>-</button>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Card"

// function ButtonAddToFavorite({ handleClick }) {
//   return <button onClick={handleClick}>Add to favorite</button>;
// }

// function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   function toggleFavorite() {
//     console.log(`Toggle favorite: ${contact.isFavorite}`);
//     setContact((prevContact) => ({
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite,
//     }));
//   }

//   return (
//     <main>
//       <article className="card">
//         <div className="card--info">
//           <h2 className="card--name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="card--contact">{contact.phone}</p>
//           <p className="card--contact">{contact.email}</p>
//           <ButtonAddToFavorite handleClick={toggleFavorite} />
//         </div>
//       </article>
//     </main>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Boxes"

const boxesData = [
  {
    id: 1,
    on: true,
  },
  {
    id: 2,
    on: false,
  },
  {
    id: 3,
    on: true,
  },
  {
    id: 4,
    on: true,
  },
  {
    id: 5,
    on: false,
  },
  {
    id: 6,
    on: false,
  },
];

// way 1

// function Box({ on }) {
//   const [colorToggle, setColorToggle] = React.useState(on);
//   const clickHandler = () =>
//     setColorToggle((oldColorToggle) => !oldColorToggle);

//   return (
//     <div
//       onClick={clickHandler}
//       style={{
//         border: "1px solid black",
//         margin: "10px",
//         width: "100px",
//         height: "100px",
//         backgroundColor: colorToggle ? "black" : null,
//       }}
//     ></div>
//   );
// }

function Box({ id, on, toggle }) {
  return (
    <div
      onClick={() => toggle(id)}
      style={{
        margin: "10px",
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: on ? "black" : null,
      }}
    ></div>
  );
}

function App() {
  const [boxes, setBoxes] = React.useState(boxesData);

  // way 2
  function toggle(id) {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((oldBox) =>
        oldBox.id === id ? { ...oldBox, on: !oldBox.on } : oldBox
      );
    });
  }

  const boxesHTML = boxes.map((box) => (
    <Box key={box.id} id={box.id} on={box.on} toggle={toggle} />
  ));
  return <main>{boxesHTML}</main>;
}

ReactDOM.render(<App />, document.getElementById("root"));
