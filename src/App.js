import React, { useState } from 'react';
import './App.css';
import { Header, Sidebar, TodoList } from './components';
import styled from 'styled-components';
import { ImUser } from 'react-icons/im';
import { MdWork } from 'react-icons/md';
import { GiShoppingCart } from 'react-icons/gi';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const todoList = [
    {
      name: 'Personal',
      color: '#fd76a1',
      icon: <ImUser />,
    },
    {
      name: 'Work',
      color: '#70c4be',
      icon: <MdWork />,
    },
    {
      name: 'Shopping',
      color: '#ab6dd1',
      icon: <GiShoppingCart />,
    },
  ]
  return (
    <MainContainer>
      <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Main style={{
        width: sidebarToggle ? '100%' : 'calc(100% - 300px)',
      }}>
        <Sidebar sidebarToggle={sidebarToggle} todoList={todoList} />
        <MainContent>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greating>Welcome to your todo list.</Greating>
            {
              todoList.map((category) => (
                <TodoList key={category.name} category={category} name={category.name} color={category.color} icon={category.icon} />
              ))
            }
          </TodoContent>
        </MainContent>
      </Main>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  color: #eee;
`;
const Main = styled.div`
  display: flex;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 50px 0;
`;
const Greating = styled.p`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`;
