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

// task 5

const jokes = [
  {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  },
  {
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
  },
  {
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy.",
  },
  {
    setup: "Why do bees stay in the hive in the winter?",
    punchline: "Swarm.",
  },
  {
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
  },
];

function Joke({ setup, punchline }) {
  return (
    <div>
      <p style={{ color: "green" }}>
        <b>{setup}</b>
      </p>
      <p style={{ color: "red" }}>
        <b>{punchline}</b>
      </p>
    </div>
  );
}

function App() {
  const jokeElements = jokes.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));

  return <div>{jokeElements}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
