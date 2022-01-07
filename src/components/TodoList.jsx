import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { ImUser } from 'react-icons/im';
import { BsPatchPlus } from 'react-icons/bs';

const TodoList = ({ name, color, icon }) => {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState('');
    const baseUrl = `https://api.airtable.com/v0/app617ZYI7FeJiC3p/${name}`;
    const addBtnHandle = async () => {
        // if(todo.length > 0){
        //     setTodo(e.target.value);
        //     setTodo('');
        //     setList([ { id: list.length, title: todo, completed: false }, ...list]);
        // }
        try{
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    Authorization: "Bearer keyE7FMy3igTvEPGE",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ records: [{ fields: { title: todo, completed: false, }}] })
            })
            setTodo('');
        }catch(error){
            console.log(error);
        }
    };
    const getTodos = async () => {
        try {
            const todoData = await fetch(baseUrl,{
                method: 'GET',
                headers: {
                    Authorization: "Bearer keyE7FMy3igTvEPGE",
                }
            });
            const data = await todoData.json();
            setList(data.records);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(list);
    useEffect(() => {
        getTodos();
    } , [todo]);
    return (
        <Container>
            <TodoHeader>
                <Icon style={{backgroundColor: color}}>{icon}</Icon>
                <Title>{name}</Title>
                <TodoInput placeholder='Add Some Tasks ...' value={todo} onChange={e => setTodo(e.target.value)} />
                <AddTodo onClick={addBtnHandle}><BsPatchPlus /></AddTodo>
            </TodoHeader>
            {
                list.map((todo, index) => {
                    return <TodoItem key={index} todo={todo} color={color} baseUrl={baseUrl} name={name} getTodos={getTodos}  />
                })
            }
        </Container>
    )
}

export default TodoList

const Container = styled.div`
    background: #20212d;
    overflow: hidden;
    margin-bottom: 30px;
    border-radius: 20px;
`;
const TodoHeader = styled.div`
    background: #272833;
    padding: 20px 40px;
    display: flex;
    align-items: center;
`;
const Icon = styled.i`
    color: #fff;
    font-size: 24px;
    padding: 8px;
    border-radius: 4px;
    margin-right: 10px;
    display: flex;
    align-self: center;
`;
const Title = styled.span`
    flex: 1;
    font-size: 20px;
    font-weight: 500;
    margin-right: 14px;
`;
const TodoInput = styled.input`
    height: 30px;
    border: none;
    outline: none;
    font-size: 18px;
    background: #20212d;
    color: #eee;
    padding: 10px;
    border-radius: 4px;
    margin-right: 10px;
`;
const AddTodo = styled.i`
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
    padding: 5px 5px 0;
    border-radius: 4px;
    &:hover{
        background: #fd76a1;
    }
`;