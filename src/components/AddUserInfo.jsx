import React  from "react";

class AddUserInfo extends React.Component {
    state = {
        name:'',
        age: ''
    };
    
    handleInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleInputAge(event) {
        this.setState ({
            age: event.target.value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: this.state.name,
            age: this.state.age
        });
    }
        
    render() {
        return (
            <div> 
                My name's {this.state.name} and I'm {this.state.age} years old.
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>
                        Your name:
                    </label>
                    <input type='text' value= {this.state.name} onChange={(event) => {this.handleInputChange(event)}}/>

                    <label>
                        Your age:
                    </label>
                    <input type='text' value= {this.state.age} onChange={(event) => {this.handleInputAge(event)}}/>

                    <button>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;