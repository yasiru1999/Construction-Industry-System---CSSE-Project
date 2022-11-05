import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SideBarDataForSupliers } from './SideBarDataForSupliers';
import { SideBarDataForAccountant } from './SideBarDataForAccountant'
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import User from './user.png'
import './sidebar.css'
import '../Suppliers/Suppliers.css'

const NavLogo = styled.button`
  width: 100%;
  height: 115px;
  font-family: 'Unica One';
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: 32px;
  text-transform: lowercase;
  letter-spacing: 2.5px;
  color: black;
  background-color: #89a7f2;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #649aea;
    box-shadow: 0px 15px 20px rgba(72, 28, 76, 0.4);
    color: #ffffff;
    transform: translateY(-3px);
  }
`;

const SidebarNav = styled.nav`
  background: #89a7f2;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #89a7f2;
`;
const SideBar = styled.div`
  width: 100%;
  height: 100%;
  background: #89a7f2;
`;
const Upper = styled.div`
  height: 80px;
  width: 250px;
  background-color: #55b8ff;
`;

function logout() {
    localStorage.removeItem("supID");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");

}

const Sidebar = () => {

    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    if (role === "Supplier") {
        return (
            <>

                <SideBar>

                    <IconContext.Provider value={{color: '#00000'}}>
                        <SidebarNav>
                            <SidebarWrap>
                                <Upper></Upper>
                                <div className={'wrap'}>

                                    <NavLogo to='#'>
                                        <img className={'userImage'} src={User}/>
                                        {name}
                                    </NavLogo>
                                </div>
                                <hr className={'hr'}/>
                                {SideBarDataForSupliers.map((item, index) => {
                                    return <SubMenu item={item} key={index}/>;
                                })}
                                <button
                                    className="selectBtn7"
                                    onClick={() =>
                                    {logout();
                                        window.location.reload()}}
                                >
                                    Sign Out
                                </button>
                            </SidebarWrap>
                        </SidebarNav>
                    </IconContext.Provider>
                </SideBar>
            </>
        );
    }else if (role === "Accountant") {
        return (
            <>

                <SideBar>

                    <IconContext.Provider value={{color: '#00000'}}>
                        <SidebarNav>
                            <SidebarWrap>
                                <Upper></Upper>
                                <div className={'wrap'}>
                                </div>
                                <hr className={'hr'}/>
                                {SideBarDataForAccountant.map((item, index) => {
                                    return <SubMenu item={item} key={index}/>;
                                })}
                                <button
                                    className="selectBtn7"
                                    onClick={() =>
                                    {logout();
                                        window.location.reload()}}
                                >
                                    Sign Out
                                </button>
                            </SidebarWrap>
                        </SidebarNav>
                    </IconContext.Provider>
                </SideBar>
            </>
        )
    } else {
        return (
        <>
            <SideBar>

                <IconContext.Provider value={{color: '#00000'}}>
                    <SidebarNav>
                        <SidebarWrap>
                            <Upper></Upper>
                            <div className={'wrap'}>
                            </div>
                            <hr className={'hr'}/>

                        </SidebarWrap>
                    </SidebarNav>
                </IconContext.Provider>
            </SideBar>

        </>
        )
    }
};

export default Sidebar;
