/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import sidebarImg from "./fonts and style/img/playlist01.png";
import sidebarImg2 from "./fonts and style/img/playlist02.png";
import sidebarImg3 from "./fonts and style/img/playlist03.png";

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main__sidebar sidebar">

        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__avatar" />
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              {isLoading ? (
              <Skeleton count={1} width={250} height={150} />
              ) : (
                <>
                <a className="sidebar__link" href="/">
                <img className="sidebar__img" src={sidebarImg} alt="day's playlist" />
                </a>
                </>
              )}
            </div>
            <div className="sidebar__item">
              {isLoading ? (
              <Skeleton count={1} width={250} height={150} />
              ) : (
                <>
                <a className="sidebar__link" href="/">
                <img className="sidebar__img" src={sidebarImg2} alt="day's playlist" />
                </a>
                </>
              )}
            </div>
            <div className="sidebar__item">
              {isLoading ? (
              <Skeleton count={1} width={250} height={150} />
              ) : (
                <>
                <a className="sidebar__link" href="/">
                <img className="sidebar__img" src={sidebarImg3} alt="day's playlist" />
                </a>
                </>
              )}
            </div>
          </div>
        </div>

  </div>
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