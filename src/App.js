import "./App.css";
import Button from "./Button";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="App">
      {/* <Button text={"ボタンa"} onClick={() => alert("ボタンa")} />
      <Button text={"ボタンb"} onClick={() => alert("ボタンb")} />
      <Button text={"リセット"} onClick={() => alert("リセット")} /> */}
      <Pokemon
        url={
          "https://zukan.pokemon.co.jp/zukan-api/up/images/index/afa02eaba4c39820fc57f4e8abaeea80.png"
        }
        name={"フシギダネ"}
      />
      <Pokemon
        url={
          "https://zukan.pokemon.co.jp/zukan-api/up/images/index/f78edf4c2bc037f4b23529edfcf9ddce.png"
        }
        name={"フシギソウ"}
      />
      <Pokemon
        url={
          "https://zukan.pokemon.co.jp/zukan-api/up/images/index/cdce516974ae6a74e1b8b855644c5ce5.png"
        }
        name={"フシギバナ"}
      />
    </div>
  );
}

export default App;
