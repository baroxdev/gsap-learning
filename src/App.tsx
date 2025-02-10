import "./App.css";
import { ScrollTriggerImageComparisionTemplate } from "./templates/scroll-trigger/image-comparation";
// import { ScrollTriggerTemplate } from "./templates/scrolltrigger.template";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* <ScrollTriggerTemplate /> */}
      <ScrollTriggerImageComparisionTemplate />
    </div>
  );
}

export default App;
