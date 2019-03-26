class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = deepThoughts[this.randomIntUpTo(deepThoughts.length)];
    this.generateNewThought = this.generateNewThought.bind(this);
    this.tweetAddress = this.twitterAddress.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  twitterAddress(thought, year) {
    return "https://twitter.com/intent/tweet?text=\"" + thought + "\" -- Jack Handey, " + year;
  }

  randomIntUpTo(n) {
    return Math.floor(Math.random() * n);
  }

  generateNewThought() {
    let i = 0;
    do {i = this.randomIntUpTo(deepThoughts.length);
    } while (deepThoughts[i].thought === this.state.thought);
    this.setState(deepThoughts[i]);
  }

  handleButtonClick() {
    this.generateNewThought();
  }

  render() {
    return (
      React.createElement("div", { id: "quote-box" },
      React.createElement("h1", null, "Deep Thoughts"),
      React.createElement(Thought, { thought: this.state.thought }),
      React.createElement(Author, { year: this.state.year }),
      React.createElement("button", { class: "btn btn-block btn-default", onClick: this.handleButtonClick, id: "new-quote" }, "New Thought"),
      React.createElement("a", { id: "tweet-quote", href: this.twitterAddress(this.state.thought, this.state.year), target: "_blank" }, React.createElement("i", { class: "fab fa-twitter fa-3x" }),
      React.createElement("p", { id: "tweet-message" }, "tweet this deep thought."))));



  }}


const Thought = props => {
  return React.createElement("q", { id: "text", class: "fading" }, props.thought);
};

const Author = props => {
  return React.createElement("p", { id: "author", class: "fading" }, "by Jack Handey (", props.year, ")");
};

const deepThoughts = [
{
  year: "1991",
  thought: "If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason." },

{
  year: "1991",
  thought: "When you die, if you get a choice between going to regular heaven or pie heaven, choose pie heaven. It might be a trick, but if it's not, mmmmmmmm, boy." },

{
  year: "1992",
  thought: "I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world because they'd never expect it." },

{
  year: "1992",
  thought: "If a kid asks where rain comes from, I think a cute thing to tell him is \"God is crying.\" And if he asks why God is crying, another cute thing to tell him is \"Probably because of something you did.\"" },

{
  year: "1992",
  thought: "It takes a big man to cry, but it takes a bigger man to laugh at that man." },

{
  year: "1993",
  thought: "Maybe to understand mankind, we have to look at the word itself. Mankind. Basically, it's made up of two separate words -- \"mank\" and \"ind.\" What do these words mean? Is's a mystery, and that's why so is mankind." },

{
  year: "1993",
  thought: "Children need encouragement. So if a kid gets an answer right, tell him it was a lucky guess. That way, he develops a good, lucky feeling." },

{
  year: "1993",
  thought: "If you ever drop your keys into a river of molten lava, let 'em go, because, man, they're gone." },

{
  year: "1993",
  thought: "I think a good novel would be where a bunch of men on a ship are looking for a whale. They look and look, but you know what? They never find him. And you know why they never find him? It doesn't say. The book leaves it up to you, the reader, to decide. Then, at the very end, there's a page that you can lick and it tastes like Kool-Aid." },

{
  year: "1993",
  thought: "Marta talks about sensuality, but I don't think she'd know sensuality if it bit her on the ass." },

{
  year: "1993",
  thought: "It's easy to sit there and say you'd like to have more money. And I guess that's what I like about it. It's easy. Just sitting there, rocking back and forth, wanting that money." },

{
  year: "1993",
  thought: "I think a good gift for the President would be a chocolate revolver. And since he's so busy, you'd probably have to run up to him real quick and hand it to him." },

{
  year: "1993",
  thought: "Whether they ever find life there or not, I think Jupiter should be considered an enemy planet." },

{
  year: "1993",
  thought: "If you lived in the Dark Ages, and you were a catapult operator, I bet the most common question people would ask is, \"Can't you make it shoot farther?\" No, I'm sorry. That's as far as it shoots." },

{
  year: "1993",
  thought: "Why is it that we will laugh at a man in a clown outfit, but we won't laugh at a man just walking down the street carrying a clown outfit in one of those plastic dry-cleaner bags?" },

{
  year: "1993",
  thought: "Probably the earliest fly swatters were nothing more than some sort of striking surface attached to the end of a long stick." },

{
  year: "1993",
  thought: "Instead of trying to build newer and bigger weapons of destruction, mankind should be thinking about getting more use out of the weapons we already have." },

{
  year: "1993",
  thought: "The crows seemed to be calling his name, thought Caw." },

{
  year: "1993",
  thought: "If you go flying back through time, and you see somebody else flying forward into the future, it's probably best to avoid eye contact." },

{
  year: "1993",
  thought: "To me, it's a good idea to always carry two sacks of something when you walk around. That way, if anybody asks, \"Hey, can you give me a hand?\" you can say, \"Sorry, got these sacks.\"" },

{
  year: "1993",
  thought: "Whenever somone asks me to define love, I usually think for a minute, then I spin around and pin the guy's arm behind his back. Now how's asking the questions?" },

{
  year: "1993",
  thought: "I remember we were all horrified to see Grandpa up on the roof with his Superman cape on. \"Get down!\" yelled Uncle Lou. \" Don't move!\" screamed Grandma. But Grandpa wouldn't listen. He walked to the edge of the roof and stuck out his arms, like he was going to fly. I forget what happened after that." },

{
  year: "1993",
  thought: "If you ever catch on fire, try to avoid seeing yourself in the mirror, because I bet that's what really throws you into a panic." },

{
  year: "1993",
  thought: "I wish my name was Todd, because then I could say, \"Yes, my name's Todd. Todd Blankenship.\" Oh, also I wish my last name was Blankenship." }];



ReactDOM.render(
React.createElement(Presentational, null),
document.getElementById('root'));