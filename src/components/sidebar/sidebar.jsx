/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import sidebarImg from "../../fonts and style/img/playlist01.png";
import sidebarImg2 from "../../fonts and style/img/playlist02.png";
import sidebarImg3 from "../../fonts and style/img/playlist03.png";

import * as S from "./sidebar.style";

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            {isLoading ? (
                <Skeleton count={1} width={250} height={150} />
                ) : (
                  <>
                  <S.SidebarLink href="/">
                    <S.SidebarImg src={sidebarImg} alt="day's playlist"></S.SidebarImg>
                  </S.SidebarLink>
                  </>
                )}
          </S.SidebarItem>
          <S.SidebarItem>
            {isLoading ? (
                <Skeleton count={1} width={250} height={150} />
                ) : (
                  <>
                  <S.SidebarLink href="/">
                    <S.SidebarImg src={sidebarImg2} alt="day's playlist"></S.SidebarImg>
                  </S.SidebarLink>
                  </>
                )}
          </S.SidebarItem>
          <S.SidebarItem>
            {isLoading ? (
                <Skeleton count={1} width={250} height={150} />
                ) : (
                  <>
                  <S.SidebarLink href="/">
                    <S.SidebarImg src={sidebarImg3} alt="day's playlist"></S.SidebarImg>
                  </S.SidebarLink>
                  </>
                )}
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );  
};

export default Sidebar