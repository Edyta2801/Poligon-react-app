import React from 'react';


function Form() {

    const handleClick =()=> console.log('React button');

    return (
        <button onClick={handleClick}>React Button</button>
    );
}
export default Form;