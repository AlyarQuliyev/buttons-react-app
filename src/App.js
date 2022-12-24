import CustomButton from "./components/CustomButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CustomButton text="Button 1" />
      <CustomButton text="Button 2" warnMessage="Danger" />
      <CustomButton text="Button 3" hint="This is button 3!" />
      <CustomButton
        text="Button 4"
        warnMessage="Danger"
        hint="This is button 4!"
      />
    </div>
  );
}
