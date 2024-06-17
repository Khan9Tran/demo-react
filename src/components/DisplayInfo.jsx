import React from "react";
import './DisplayInfo.scss';
import Logo from './../vite.svg'
// class DisplayInfo extends React.Component {
//     render(){
//         const {listUser} = this.props;
//         console.log('render')
//         return (
//             <div className='display-info-container'>
//                 <div>
//                 { true && listUser.map((user, index) => {
//                     console.log(user)
//                     return (
//                         <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
//                             <p>
//                                 Name: {user.name}
//                             </p>
//                             <p>
//                                 Age: {user.age}
//                             </p>
//                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                         </div>
//                     )
//                 })}
//                 </div>
//             </div>
//         );
//     }

// }
const DisplayInfo = (props) => {
    const {listUser} = props;
    return (
        <div className='display-info-container'>
            <div>
            { true && listUser.map((user, index) => {
                console.log(user)
                return (
                    <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                        <p>
                            Name: {user.name}
                        </p>
                        <p>
                            Age: {user.age}
                        </p>
                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                    </div>
                )
            })}
            </div>
        </div>
    );
        
}
export default DisplayInfo;