import NinyFooter from "./components/Footer/NinyFooter";
import NinyHeader from "./components/Header/NinyHeader";
import TagsList from "./components/Tags/TagsList";
import NineImg from "./components/Img/Img";
function App() {
  return (
    <div className="App">
        <NinyHeader></NinyHeader>
        <TagsList></TagsList>
        <h4>Late hometask</h4>
        <NineImg></NineImg>
        <NinyFooter></NinyFooter>
    </div>
  );
}

export default App;
