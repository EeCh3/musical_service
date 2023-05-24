/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect } from 'react';
// import styled from "styled-components"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import sidebarImg from "./fonts and style/img/playlist01.png";
import sidebarImg2 from "./fonts and style/img/playlist02.png";
import sidebarImg3 from "./fonts and style/img/playlist03.png";

// const MainSidebar = styled.div`
//   max-width: 418px;
//   padding: 20px 90px 20px 78px;
// `;

// const SidebarPersonal = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: horizontal;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: row;
//           flex-direction: row;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   -webkit-box-pack: end;
//       -ms-flex-pack: end;
//           justify-content: flex-end;
//   padding: 12px 0 15px 0;
// `;

// const SidebarPersonalName = styled.p`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #FFFFFF;
//   margin-right: 16px;
// `;

// const SidebarAvatar = styled.div`
//   width: 43px;
//   height: 43px;
//   background-color: #313131;
//   border-radius: 50%;
// `;

// const SidebarBlock = styled.div`
// height: 100%;
//   padding: 240px 0 0 0;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: column;
//           flex-direction: column;
//   -webkit-box-pack: start;
//       -ms-flex-pack: start;
//           justify-content: flex-start;
// `;

// const SidebarList = styled.div`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//       -ms-flex-direction: column;
//           flex-direction: column;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
// `;

// const SidebarItem = styled.div`
//   width: 250px;
//   height: 150px;
//   &:not(:last-child) {
//     margin-bottom: 30px;
//   }
// `;

// const SidebarLink = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const SidebarImg = styled.img`
//   width: 100%;
//   height: auto;
// `;
import * as S from "./styles";

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

  //   <div className="main__sidebar sidebar">

  //       <div className="sidebar__personal">
  //         <p className="sidebar__personal-name">Sergey.Ivanov</p>
  //         <div className="sidebar__avatar" />
  //       </div>
  //       <div className="sidebar__block">
  //         <div className="sidebar__list">
  //           <div className="sidebar__item">
  //             {isLoading ? (
  //             <Skeleton count={1} width={250} height={150} />
  //             ) : (
  //               <>
  //               <a className="sidebar__link" href="/">
  //               <img className="sidebar__img" src={sidebarImg} alt="day's playlist" />
  //               </a>
  //               </>
  //             )}
  //           </div>
  //           <div className="sidebar__item">
  //             {isLoading ? (
  //             <Skeleton count={1} width={250} height={150} />
  //             ) : (
  //               <>
  //               <a className="sidebar__link" href="/">
  //               <img className="sidebar__img" src={sidebarImg2} alt="day's playlist" />
  //               </a>
  //               </>
  //             )}
  //           </div>
  //           <div className="sidebar__item">
  //             {isLoading ? (
  //             <Skeleton count={1} width={250} height={150} />
  //             ) : (
  //               <>
  //               <a className="sidebar__link" href="/">
  //               <img className="sidebar__img" src={sidebarImg3} alt="day's playlist" />
  //               </a>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  // </div>
  );

  
    
  };

  export default Sidebar

  // return (
  //   <div className="main__sidebar sidebar">
  //     <div className="sidebar__personal">
  //       <p className="sidebar__personal-name">Sergey.Ivanov</p>
  //       <div className="sidebar__avatar" />
  //     </div>
  //     <div className="sidebar__block">
  //       <div className="sidebar__list">
  //         <div className="sidebar__item">
  //           <a className="sidebar__link" href="/">
  //             <img className="sidebar__img" src={sidebarImg} alt="day's playlist" />
  //           </a>
  //         </div>
  //         <div className="sidebar__item">
  //           <a className="sidebar__link" href="/">
  //             <img className="sidebar__img" src={sidebarImg2} alt="day's playlist" />
  //           </a>
  //         </div>
  //         <div className="sidebar__item">
  //           <a className="sidebar__link" href="/">
  //             <img className="sidebar__img" src={sidebarImg3} alt="day's playlist" />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );