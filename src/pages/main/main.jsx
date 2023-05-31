import Main from "../../components/Main/Main.jsx";
import MainNav from "../../components/mainNav/mainNav.jsx";
import CenterBlock from "../../components/centerBlock/centerBlock.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import MusicPlayer from "../../components/musicPlayer/musicPlayer.jsx";



function mainPage() {
    return (
        <Main>
        <MainNav/>
        <CenterBlock/>
        <Sidebar/>
        <MusicPlayer/>
        </Main>
     )
  }

  export default mainPage