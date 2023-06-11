/* eslint-disable import/prefer-default-export */
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import Main from "../../components/Main/Main";
import MainNav from "../../components/mainNav/mainNav";
import CenterBlock from "../../components/centerBlock/centerBlock";
import Sidebar from "../../components/sidebar/sidebar";
import MusicPlayer from "../../components/musicPlayer/musicPlayer";



function MainPage() {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <MainNav/>
                    <CenterBlock/>
                    <Sidebar/>
                    <MusicPlayer/>
                </Main>   
            </Container>
        </Wrapper>
     )
  }

  export { MainPage };