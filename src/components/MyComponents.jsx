import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    state = {
        listUser : [{id: 1, name: 'John', age: '10'}, {id: 2, name: 'Eric', age: '30'}, {id:3, name: 'Doe', age: '40'}]
      };

    handleClick(event) {
        this.setState({
            name: 'John',
            age: Math.floor(Math.random() * 100) + 1
        })
    }
    handleInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault();
        console.log(this.state.name)
    }

    handleAddNewUser = (userObj) => {
        this.setState ({
            listUser: [userObj, ...this.state.listUser]
        })
    }
        
    render() {
        return (
            <>
                <div className='a'>
                    <AddUserInfo handleAddNewUser = {this.handleAddNewUser}/>
                    <br/>
                    <DisplayInfo listUser = {this.state.listUser}/>
                </div>
                <div className='b'>
                </div>
            </>

        );
    }
}

export default MyComponent;