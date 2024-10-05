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

// const boxesData = [
//   {
//     id: 1,
//     on: true,
//   },
//   {
//     id: 2,
//     on: false,
//   },
//   {
//     id: 3,
//     on: true,
//   },
//   {
//     id: 4,
//     on: true,
//   },
//   {
//     id: 5,
//     on: false,
//   },
//   {
//     id: 6,
//     on: false,
//   },
// ];

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

// function Box({ id, on, toggle }) {
//   return (
//     <div
//       onClick={() => toggle(id)}
//       style={{
//         margin: "10px",
//         width: "100px",
//         height: "100px",
//         border: "1px solid black",
//         backgroundColor: on ? "black" : null,
//       }}
//     ></div>
//   );
// }

// function App() {
//   const [boxes, setBoxes] = React.useState(boxesData);

//   // way 2
//   function toggle(id) {
//     setBoxes((oldBoxes) => {
//       return oldBoxes.map((oldBox) =>
//         oldBox.id === id ? { ...oldBox, on: !oldBox.on } : oldBox
//       );
//     });
//   }

//   const boxesHTML = boxes.map((box) => (
//     <Box key={box.id} id={box.id} on={box.on} toggle={toggle} />
//   ));
//   return <main>{boxesHTML}</main>;
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Form"

// function Form() {
//   const [formData, setFormData] = React.useState({
//     employmentStatus: "",
//     isFriendly: true,
//     firstName: "",
//     lastName: "",
//     favColor: "",
//     comment: "",
//     email: "",
//   });

//   function handleChange(event) {
//     const { value, name, type, checked } = event.target;
//     setFormData((oldFormData) => ({
//       ...oldFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // submitApi(formData);
//     console.log(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="First name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <br />

//       <input
//         type="text"
//         placeholder="Last name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <br />

//       <input
//         type="text"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <br />

//       <textarea
//         placeholder="Comment"
//         onChange={handleChange}
//         name="comment"
//         value={formData.comment}
//       />
//       <br />

//       <input
//         type="checkbox"
//         id="isFriendly"
//         name="isFriendly"
//         onChange={handleChange}
//         checked={formData.isFriendly}
//       />
//       <label htmlFor="isFriendly">Are you friendly?</label>
//       <br />
//       <br />

//       <fieldset>
//         <legend>Current employment status:</legend>
//         <input
//           type="radio"
//           id="unemployed"
//           name="employmentStatus"
//           value="unemployed"
//           onChange={handleChange}
//           checked={formData.employmentStatus === "unemployed"}
//         />
//         <label htmlFor="unemployed">Unemployed</label>
//         <br />
//         <input
//           type="radio"
//           id="part-time"
//           name="employmentStatus"
//           value="part-time"
//           onChange={handleChange}
//           checked={formData.employmentStatus === "part-time"}
//         />
//         <label htmlFor="part-time">Part-time</label>
//         <br />
//         <input
//           type="radio"
//           id="full-time"
//           name="employmentStatus"
//           value="full-time"
//           checked={formData.employmentStatus === "full-time"}
//           onChange={handleChange}
//         />
//         <label htmlFor="full-time">Full-time</label>
//       </fieldset>
//       <br />

//       <label htmlFor="favColor">What is your favorite color?</label>
//       <br />
//       <select
//         id="favColor"
//         name="favColor"
//         onChange={handleChange}
//         value={formData.favColor}
//       >
//         <option value="">-- Chose --</option>
//         <option value="red">Red</option>
//         <option value="white">White</option>
//         <option value="black">Black</option>
//       </select>
//       <br />
//       <br />

//       <button>Submit</button>
//     </form>
//   );
// }

// ReactDOM.render(<Form />, document.getElementById("root"));

// task "Submit form"

// function App() {
//   const [formData, setFormData] = React.useState({
//     email: "",
//     password: "",
//     isJoinNewsletter: false,
//     passwordConfirmation: "",
//   });

//   function handleChange(event) {
//     const { name, checked, type, value } = event.target;
//     setFormData((oldFormData) => ({
//       ...oldFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const isPasswordCorrect =
//       formData.password === formData.passwordConfirmation;

//     console.log(
//       isPasswordCorrect ? "Successfully signed up" : "passwords to not match"
//     );

//     if (formData.isJoinNewsletter && isPasswordCorrect)
//       console.log("Thanks for signing up for our newsletter!");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email address"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="Confirm password"
//         value={formData.passwordConfirmation}
//         name="passwordConfirmation"
//         onChange={handleChange}
//       />
//       <div>
//         <input
//           id="okayToEmail"
//           type="checkbox"
//           name="isJoinNewsletter"
//           checked={formData.isJoinNewsletter}
//           onChange={handleChange}
//         />
//         <label htmlFor="okayToEmail">I want to join the newsletter</label>
//       </div>
//       <button>Sign up</button>
//     </form>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "working with API"

// function App() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [characterNumber, setCharacterNumber] = React.useState(1);

//   function handleClick() {
//     setCharacterNumber((oldCharacterNumber) => oldCharacterNumber + 1);
//   }

//   React.useEffect(
//     function () {
//       fetch(`https://swapi.dev/api/people/${characterNumber}`)
//         .then((res) => res.json())
//         .then((data) => setStarWarsData(data));
//     },
//     [characterNumber]
//   );

//   return (
//     <div>
//       <button onClick={handleClick}>Get next character</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "window tracker"

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerHeight);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}

function App() {
  const [isShow, setIsShow] = React.useState(true);

  function handlerClick() {
    setIsShow((oldIsShow) => !oldIsShow);
  }

  return (
    <div className="container">
      <button onClick={handlerClick}>Toggle WindowTracker</button>
      {isShow && <WindowTracker />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
