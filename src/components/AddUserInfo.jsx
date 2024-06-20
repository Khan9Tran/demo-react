import React, { useState }  from "react";

const AddUserInfo = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const handleInputChange = (event) => {
        setName(event.target.value)
    }
    const handleInputAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            age: age
        });
    }
    return (
        <div> 
            My name's {name} and I'm {age} years old.
            <form onSubmit={(event) => {handleOnSubmit(event)}}>
                <label>
                    Your name:
                </label>
                <input type='text' value= {name} onChange={(event) => {handleInputChange(event)}}/>

                <label>
                    Your age:
                </label>
                <input type='text' value= {age} onChange={(event) => {handleInputAge(event)}}/>

                <button>
                    Submit
                </button>
            </form>
        </div>
    );
}

// class AddUserInfo extends React.Component {
//     state = {
//         name:'',
//         age: ''
//     };
    
//     handleInputChange(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleInputAge(event) {
//         this.setState ({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit(event) {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1,
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
        
//     render() {
//         return (
//             <div> 
//                 My name's {this.state.name} and I'm {this.state.age} years old.
//                 <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                     <label>
//                         Your name:
//                     </label>
//                     <input type='text' value= {this.state.name} onChange={(event) => {this.handleInputChange(event)}}/>

//                     <label>
//                         Your age:
//                     </label>
//                     <input type='text' value= {this.state.age} onChange={(event) => {this.handleInputAge(event)}}/>

//                     <button>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

export default AddUserInfo;