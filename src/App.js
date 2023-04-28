import './fonts and style/css/style.css';
import mainNav from "./mainNav";
import centerBlock from "./centerBlock";
import sidebar from "./sidebar";
import musicPlayer from "./musicPlayer";

function App() {
  return (
    <div>
      <div>
        <mainNav/>
        <centerBlock/>
        <sidebar/>
        <musicPlayer/>
      </div>
   </div>
   )
   }

export default App;
