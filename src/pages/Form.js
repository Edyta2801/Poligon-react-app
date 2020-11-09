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
    state = {
        name: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick() {
        console.log('React Button');
    }
    handleChange(event) {
        console.log('input value:', event.target.value);
        this.setState({ name: event.target.value });
        console.log('this', this);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}>React Button</button>
            </form>
        );
    }

}


export default Form;