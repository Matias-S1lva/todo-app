import React from 'react';

const CreateTodoButton = () => {
    const onClickButton = () => {
        alert("aca se tiene que abrir el modal")
    }

    return (
        <button onClick={onClickButton}>+</button>
    );
}

export  {CreateTodoButton};