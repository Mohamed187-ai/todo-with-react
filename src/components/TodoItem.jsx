import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegCircle } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GiCheckMark } from 'react-icons/gi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const TodoItem = ({ todo, list, setList, color, baseUrl, name, getTodos }) => {
    const [editTodo, setEditTodo] = useState(todo.fields.title);
    useEffect(() => {
        setEditTodo(todo.fields.title);
    }, [todo]);
    const deleteTodo = async () => {
        // const currentTodoId = todo.id;
        // setList(list.filter(todo => todo.id !== currentTodoId));
        try{
            fetch(`${baseUrl}/${todo.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer keyE7FMy3igTvEPGE",
                }
            })
            getTodos();
        }catch(error){
            console.log(error);
        }
    }
    const saveTodo = async () => {
        // const currentTodoId = todo.id;
        // setList(list.map(todo => todo.id === currentTodoId ? { ...todo, title: editTodo } : todo));
        try{
            await fetch(`${baseUrl}/${todo.id}`, {
                method: 'PUT',
                headers: {
                    Authorization: "Bearer keyE7FMy3igTvEPGE",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fields: { title: editTodo, completed: todo.fields.completed, } })
            })
            getTodos();
        }catch(error){
            console.log(error);
        }
    }
    const completeTodo = async () => {
        // const currentTodoId = todo.id;
        // setList(list.map(todo => todo.id === currentTodoId ? { ...todo, completed: !todo.completed } : todo));
        try{
            await fetch(`${baseUrl}/${todo.id}`, {
                method: 'PUT',
                headers: {
                    Authorization: "Bearer keyE7FMy3igTvEPGE",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fields: { title: todo.fields.title, completed: !todo.fields.completed, } })
            })
        }catch(error){
            console.log(error);
        }
    }
    return (
        <TodoItemList>
            <Checkbox onClick={completeTodo} style={{ color: color }}>
                {
                    todo.completed ? <BsFillCheckCircleFill /> : <FaRegCircle />
                }
            </Checkbox>
            <input value={editTodo} onChange={e => setEditTodo(e.target.value) } style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
            {
                todo.fields.title !== editTodo && (
                    <SaveTodo  onClick={saveTodo}>
                        <GiCheckMark />
                    </SaveTodo>
                )
            }
            <DeleteTodo onClick={deleteTodo}  >
                <RiDeleteBin5Line />
            </DeleteTodo>
        </TodoItemList>
    )
}

export default TodoItem;

const TodoItemList = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    input{
        flex: 1;
        border: none;
        outline: none;
        font-size: 22px;
        background: none;
        color: #eee;
    }
`;
const Checkbox = styled.i`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`;
const DeleteTodo = styled.i`
    font-size: 24px;
    width: 40px;
    height: 40px;
    color: #ff1605;
    padding: 8px;
    cursor: pointer;
    margin-left: 14px;
    margin-right: -12px;
    border-radius: 4px;
    &:hover{
        background: #7e2601;
    }
`;
const SaveTodo = styled.i`
    font-size: 20px;
    color: #00ff00;
    border-radius: 4px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    &:hover{
        background: #2b6127;
    }
`;
