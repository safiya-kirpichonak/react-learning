// task 1

// function Contact(properties) {
//   return (
//     <div>
//       <img stc={properties.img} />
//       <p>
//         <span>{properties.name}</span>
//         <span>{properties.phone}</span>
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Contact img="fake1.png" name="name1" phone="111-111" />
//       <Contact img="fake2.png" name="name2" phone="222-222" />
//       <Contact img="fake3.png" name="name3" phone="333-333" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task 2

// function Joke({ something, setup, punchline }) {
//   console.log(something);

//   return (
//     <div>
//       <p>
//         <b>{setup}</b>
//       </p>
//       {punchline && <p>{punchline}</p>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Joke
//         something={[1, 2, 3]}
//         setup="Why don't skeletons fight each other?"
//         punchline="They don't have the guts!"
//       />
//       <Joke
//         something={true}
//         setup="I told my computer I needed a break… now it won’t stop sending me ads for KitKats."
//       />
//       <Joke
//         setup="Why did the scarecrow win an award?"
//         punchline="Because he was outstanding in his field!"
//       />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task 3

// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNumbers = numbers.map((number) => number * number);
// console.log(squaredNumbers);

// const names = ["alisa", "bob", "tom"];
// const normalNames = names.map((name) => name[0].toUpperCase() + name.slice(1));
// console.log(normalNames);

// const string = ["Text1", "Text2", "Text3"];
// const html = string.map((item) => `<p>${item}</p>`);
// console.log(html);

// task 4

// function App() {
//   const colors = ["red", "green", "blue", "yellow", "purple"];

//   return (
//     <div>
//       {colors.map((item) => (
//         <h3>{item}</h3>
//       ))}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Jokes"

// const jokes = [
//   {
//     setup: "I got my daughter a fridge for her birthday.",
//     punchline: "I can't wait to see her face light up when she opens it.",
//   },
//   {
//     setup: "How did the hacker escape the police?",
//     punchline: "He just ransomware!",
//   },
//   {
//     setup: "Why don't pirates travel on mountain roads?",
//     punchline: "Scurvy.",
//   },
//   {
//     setup: "Why do bees stay in the hive in the winter?",
//     punchline: "Swarm.",
//   },
//   {
//     setup: "What's the best thing about Switzerland?",
//     punchline: "I don't know, but the flag is a big plus!",
//   },
// ];

// function Joke({ setup, punchline }) {
//   const [isShown, useIsShown] = React.useState(false);
//   const handlerClick = () => useIsShown((oldValue) => !oldValue);

//   return (
//     <div>
//       <p style={{ color: "green" }}>
//         <b>{setup}</b>
//       </p>
//       <p style={{ color: "red" }}>{isShown && <b>{punchline}</b>}</p>
//       <button onClick={handlerClick}>
//         {isShown ? "Hide" : "Show"} punchline
//       </button>
//     </div>
//   );
// }

// function App() {
//   const jokeElements = jokes.map((joke) => (
//     <Joke setup={joke.setup} punchline={joke.punchline} />
//   ));

//   return <div>{jokeElements}</div>;
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Messages"

// function App() {
//   const [messages] = React.useState([]);

//   return (
//     <div>
//       {messages.length === 0 ? (
//         <h1>You are all caught up!</h1>
//       ) : (
//         <h1>
//           You have {messages.length} unread{" "}
//           {messages.length === 1 ? "message" : "messages"}!
//         </h1>
//       )}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// task "Form"

function Form() {
  const [formData, setFormData] = React.useState({
    employmentStatus: "",
    isFriendly: true,
    firstName: "",
    lastName: "",
    favColor: "",
    comment: "",
    email: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <br />

      <input
        type="text"
        placeholder="Last name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br />

      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <br />

      <textarea
        placeholder="Comment"
        onChange={handleChange}
        name="comment"
        value={formData.comment}
      />
      <br />

      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status:</legend>
        <input
          type="radio"
          id="unemployed"
          name="employmentStatus"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employmentStatus === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employmentStatus"
          value="part-time"
          onChange={handleChange}
          checked={formData.employmentStatus === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employmentStatus"
          value="full-time"
          checked={formData.employmentStatus === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br />

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        name="favColor"
        onChange={handleChange}
        value={formData.favColor}
      >
        <option value="">-- Chose --</option>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>
      <br />
      <br />

      <button></button>
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById("root"));
