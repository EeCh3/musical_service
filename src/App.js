import './fonts and style/css/style.css';
import MainNav from "./mainNav";
import CenterBlock from "./centerBlock";
import Sidebar from "./sidebar";
import MusicPlayer from "./musicPlayer";

function App() {
  return (
    <div className="wrapper" >
      <div className="container">
      <main className="main">
      <MainNav/>
      <CenterBlock/>
      <Sidebar/>
      <MusicPlayer/>
      </main>
      </div>
    </div>
   )
   }

export default App;
