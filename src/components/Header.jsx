import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdPhotoLibrary, MdOutlineDashboard } from 'react-icons/md';
import styled from 'styled-components';

const Header = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <Container>
            <HeaderItem>
                <div onClick={() => setSidebarToggle(!sidebarToggle)}>
                    <FaBars size={20} />
                </div>
                <div>
                    <MdOutlineDashboard size={20} /> <p>Dashboard</p>
                </div>
                <div>
                    <MdPhotoLibrary size={20} /> <p>Collections</p>
                </div>
            </HeaderItem>
            <HeaderItem>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="google" />
            </HeaderItem>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: #20212d;
    box-shadow: 0px 4px 15px 0px #20212d;
    -webkit-box-shadow: 0px 4px 15px 0px #20212d;
`;
const HeaderItem = styled.div`
    display: flex;
    color: #fff;
    & > div {
        display: flex;
        align-items: flex-end;
        padding: 10px 20px;
        border-radius: 50px;
        &:hover {
            cursor: pointer;
            background-color: #18181f;
        }
        & > p {
            margin-left: 10px;
        } 
    }
    &>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`;
