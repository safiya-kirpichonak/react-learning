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

function Joke({ something, setup, punchline }) {
  console.log(something);

  return (
    <div>
      <p>
        <b>{setup}</b>
      </p>
      {punchline && <p>{punchline}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Joke
        something={[1, 2, 3]}
        setup="Why don't skeletons fight each other?"
        punchline="They don't have the guts!"
      />
      <Joke
        something={true}
        setup="I told my computer I needed a break… now it won’t stop sending me ads for KitKats."
      />
      <Joke
        setup="Why did the scarecrow win an award?"
        punchline="Because he was outstanding in his field!"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
