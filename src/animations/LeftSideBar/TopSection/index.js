import React, { useContext } from 'react';
import BurgerButton  from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';

const TopSection = () => {
  const { setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className="LeftSideBar__TopSection">
      <BurgerButton
        onClick={() => setIsShowSidebar(true)}
      />
      <h1>
      &nbsp;&nbsp;Sumo.UY
      </h1>
    </div>
  );
};

export default TopSection;
