/* eslint-disable import/prefer-default-export */
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import Main from "../../components/Main/Main";
import MainNav from "../../components/mainNav/mainNav";
import SelectionCenterBlock from "../../components/selectionCenterBlock/selectionCenterBlock";
import MusicPlayer from "../../components/musicPlayer/musicPlayer";



function IndiePage() {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <MainNav/>
                    <SelectionCenterBlock/>
                    <MusicPlayer/>
                </Main>  
            </Container>
        </Wrapper>

     )
  }

  export { IndiePage };