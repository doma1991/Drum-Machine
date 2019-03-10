function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{ id: "Heater-1", letter: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
{ id: "Dsc-Oh", letter: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
{ id: "Kick-n-hat", letter: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
{ id: "Cev", letter: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
{ id: "Chord-1", letter: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
{ id: "Give-us-a-light", letter: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
{ id: "Dry-Ohh", letter: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
{ id: "Punchy-kick", letter: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
{ id: "Side-stick", letter: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" }];


class DrumMachine extends React.Component {
  constructor() {
    super();_defineProperty(this, "displayUpdateQ",







    () => {
      this.setState({
        display: sounds[0]["id"] });


      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateW",

    () => {
      this.setState({
        display: sounds[1]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateE",
    () => {
      this.setState({
        display: sounds[2]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateA",

    () => {
      this.setState({
        display: sounds[3]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateS",

    () => {
      this.setState({
        display: sounds[4]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateD",

    () => {
      this.setState({
        display: sounds[5]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateZ",

    () => {
      this.setState({
        display: sounds[6]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateX",

    () => {
      this.setState({
        display: sounds[7]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;
    });_defineProperty(this, "displayUpdateC",

    () => {
      this.setState({
        display: sounds[8]["id"] });

      const audio = event.target.querySelector('audio');
      audio.play();
      audio.currentTime = 0;

    });this.state = { display: "", sound: "" };}
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Drum Machine"),
      React.createElement("div", { class: "container", id: "drum-machine" },
      React.createElement("div", { class: "row justify-content-center align-items-center" },
      React.createElement("div", { class: "col-sm-3", id: "display" }, this.state.display)),

      React.createElement("div", { class: "row justify-content-center align-items-center" },
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "Q", onClick: this.displayUpdateQ }, React.createElement("audio", { class: "clip", id: "Heater-1", src: sounds[0]["src"] }), "Q"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "W", onClick: this.displayUpdateW }, React.createElement("audio", { class: "clip", id: "Dsc-Oh", src: sounds[1]["src"] }), "W"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "E", onClick: this.displayUpdateE }, React.createElement("audio", { class: "clip", id: "Kick-n-hat", src: sounds[2]["src"] }), "E")),

      React.createElement("div", { class: "row justify-content-center align-items-center" },
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "A", onClick: this.displayUpdateA }, React.createElement("audio", { class: "clip", id: "Cev", src: sounds[3]["src"] }), "A"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "S", onClick: this.displayUpdateS }, React.createElement("audio", { class: "clip", id: "Chord-1", src: sounds[4]["src"] }), "S"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "D", onClick: this.displayUpdateD }, React.createElement("audio", { class: "clip", id: "Give-us-a-light", src: sounds[5]["src"] }), "D")),

      React.createElement("div", { class: "row justify-content-center align-items-center" },
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "Z", onClick: this.displayUpdateZ }, React.createElement("audio", { class: "clip", id: "Dry-Ohh", src: sounds[6]["src"] }), "Z"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "X", onClick: this.displayUpdateX }, React.createElement("audio", { class: "clip", id: "Punchy-kick", src: sounds[7]["src"] }), "X"),
      React.createElement("div", { class: "drum-pad col-sm-1 text-center", id: "C", onClick: this.displayUpdateC }, React.createElement("audio", { class: "clip", id: "Side-stick", src: sounds[8]["src"] }), "C")))));




  }}
;

// class Q extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <button class="drum-pad col-sm-1 text-center" id="Q" onClick={this.displayUpdateQ}>Q</button>
//     )
//   }
// };

// class W extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="W" onClick={this.displayUpdateW}>W</div>
//     )
//   }
// };

// class E extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="E" onClick={this.displayUpdateE}>E</div>
//     )
//   }
// };

// class A extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="A" onClick={this.displayUpdateA}>A</div>
//     )
//   }
// };

// class S extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="S" onClick={this.displayUpdateS}>S</div>
//     )
//   }
// };

// class D extends React.Component {
//     constructor() {
//     super(); 
//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="D" onClick={this.displayUpdateD}>D</div>
//     )
//   }
// };

// class Z extends React.Component {
//     constructor() {
//     super();

//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="Z" onClick={this.displayUpdateZ}>Z</div>
//     )
//   }
// };

// class X extends React.Component {
//     constructor() {
//     super();
//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="X" onClick={this.displayUpdateX}>X</div>
//     )
//   }
// };

// class C extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return(
//       <div class="drum-pad col-sm-1 text-center" id="C" onClick={this.displayUpdateC}>C</div>
//     )
//   }
// };

// // class Display extends React.Component {
// //   constructor(){
// //     super();
// //     this.state = {
// //       display: ""
// //     };

//   }

//     displayUpdateQ = () => {
//         this.state = {
//         display: "Q"
//         };
//     }

//     displayUpdateW = () => {
//         this.state = {
//         display: "W"
//         };
//     }
//         displayUpdateE = () => {
//         this.state = {
//         display: "E"
//         };
//     }

//        displayUpdateA = () => {
//         this.state = {
//         display: "A"
//         };
//     }

//      displayUpdateS = () => {
//         this.state = {
//         display: "S"
//         };
//     }

//     displayUpdateD = () => {
//         this.state = {
//         display: "D"
//         };
//     }

//        displayUpdateZ = () => {
//         this.state = {
//         display: "Z"
//         };
//     }

//         displayUpdateX = () => {
//         this.state = {
//         display: "X"
//         };
//     }

//        displayUpdateC = () => {
//         this.state = {
//         display: "C"
//         };

//   }

//   render() {
//     return(
//       <div class="col-sm-3" id="display">{this.state.display}</div>
//     )
//   }
// };

ReactDOM.render(
React.createElement(DrumMachine, null),
document.getElementById("body"));