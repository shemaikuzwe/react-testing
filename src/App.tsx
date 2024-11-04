import "./App.css"
import ExapandableText from "./components/ExapandbleText";

function App() {
  const text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe praesentium magni dolorem optio. Doloremque veritatis aliquid voluptates odit itaque cupiditate labore ipsum explicabo, tempora hic, consequuntur ea pariatur odio voluptas.";
  return (
    <>
      <ExapandableText text={text}/>
    </>
  );
}

export default App;
