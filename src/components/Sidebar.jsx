import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ sidebarToggle, todoList }) => {
    return (
        <Container style={{
            width: sidebarToggle ? '300px' : '70px',
        }}>
            <Title>{sidebarToggle ? 'Collection' : 'C'}</Title>
            <CategoryList>
                {
                    todoList.map(category => {
                        return(
                            <CategoryItem key={category.name}>
                                <CategoryIcon style={{ backgroundColor: category.color }}>{category.icon}</CategoryIcon>
                                {sidebarToggle && <span>{ category.name }</span>}
                            </CategoryItem>
                        )
                    })
                }
            </CategoryList>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    height: calc(100vh - 70px);
    background-color: #20212d;
    padding: 0 20px;
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 50px 0;
`;
const CategoryList = styled.div`
    margin-top: -16px;
`;
const CategoryItem = styled.div`
    display: flex;
    align-items: center;
    margin: 4px -16px;
    padding: 10px 16px;
    border-radius: 8px;
    width: calc(100% - 32px);
    span{
        margin-left: 10px;
        font-weight: 500;
        font-size: 18px;
    }
    &:hover{
        background-color: #18181f;
        cursor: pointer;
    }
`;
const CategoryIcon = styled.div`
    width: 32px;
    height: 32px;
    font-size: 24px;
    border-radius: 4px;
    display: grid;
    place-items: center;
`;
