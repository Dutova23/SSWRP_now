import React, { useState, useEffect } from 'react';

const Main = () => {
    const [counter, setCounter] = useState(0);
    const [login, setLogin] = useState(localStorage.getItem("login") || '');
    const [password, setPassword] = useState(localStorage.getItem("password") || '');

    const onIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const onDecrement = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (login === "admin" && password === "admin") {
            alert("Успешно");
        } else {
            alert("Логин или пароль введён неправильно");
        }

        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
    };

    const onClearButton = () => {
        setLogin("");
        setPassword("");
    };

    useEffect(() => {
        alert("Страница успешно загружена");
    }, []);

    return (
        <>
            <h1 style={{ color: 'orange' }}>Привет! Введите логин и пароль</h1>
            <div id="counter">{counter}</div>
            <button id="incrementBtn" onClick={onIncrement}>Увеличивать счетчик на "1"</button>
            <button id="decrementBtn" onClick={onDecrement}>Уменьшить счетчик на "1"</button>
            <br/><br/>
            <form id="loginForm" onSubmit={onSubmitForm}>
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" value={login} onChange={(e) => setLogin(e.target.value)} /><br/><br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                <button type="submit" id="submitBtn">Отправить</button>
                <button type="button" id="clearBtn" onClick={onClearButton}>Очистить</button>
            </form>
        </>
    );
};

export default Main;
