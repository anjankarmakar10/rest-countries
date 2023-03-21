import ReactDOM from "react-dom/client";
import "./app.css";
import Body from "./components/Body";
import { Header } from "./components/Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
