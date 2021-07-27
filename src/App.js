import { PrimaryBotton } from "./components/atoms/button/PrimaryBotton";
import { SecondaryBotton } from "./components/atoms/button/SecondaryBotton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryBotton>テスト</PrimaryBotton>
      <br />
      <SecondaryBotton>試験</SecondaryBotton>
    </div>
  );
}
