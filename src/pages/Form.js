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
        name: '',
        surname: '',
        age: ''
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick() {
        console.log('React Button');
    }
    handleChange = (event) => {
const keyName=event.target.name;
        this.setState({ [keyName]: event.target.value });


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="surname" placeholder="Surname" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="age" placeholder="Age" onChange={this.handleChange} />
                </div>
                <button type="submit" onClick={this.handleClick}>Send</button>
            </form>
        );
    }

}


export default Form;