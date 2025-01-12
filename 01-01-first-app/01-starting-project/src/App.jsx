import MyGoal from "./MyGoal";
import atomImage from "./assets/react-core-concepts.png"
const reactDescriptions = ["Core", "Crucial", "Fundamental"];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <header>
    <img src={atomImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <h2>Hello React Header!!!</h2>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <MyGoal/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
