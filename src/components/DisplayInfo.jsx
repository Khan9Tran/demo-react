import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowListUser : false
    }
    handleShowHide = () =>
    {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render(){
        const {listUser} = this.props;
        return (
            <div>
                <div>
                    <span onClick={(event) => {this.handleShowHide(event)}}> {this.state.isShowListUser && 'Hide list users:' || 'Show list users'}</span>
                </div>
                <div>
                { this.state.isShowListUser && listUser.map((user, index) => {
                    console.log(user)
                    return (
                        <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                            <p>
                                Name: {user.name}
                            </p>
                            <p>
                                Age: {user.age}
                            </p>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }

}

export default DisplayInfo;