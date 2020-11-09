import React from 'react';


// function Form() {

//     const handleClick = () => console.log('React button');
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(event);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <button onClick={handleClick}>React Button</button>
//         </form>
//     );
// }

class Form extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick() {
        console.log('React Button');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button onClick={this.handleClick}>React Button</button>
            </form>
        );
    }

}


export default Form;