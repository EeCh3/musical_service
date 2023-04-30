import './fonts and style/css/style.css';
import MainNav from "./mainNav";
import CenterBlock from "./centerBlock";
import Sidebar from "./sidebar";
import MusicPlayer from "./musicPlayer";

function App() {
  return (
    <div>
      <div>
        <MainNav/>
        <CenterBlock/>
        <Sidebar/>
        <MusicPlayer/>
      </div>
   </div>
   )
   }

export default App;
