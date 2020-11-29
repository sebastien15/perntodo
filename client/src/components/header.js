import React,{ Component } from 'react';
import "../css/styles.css";


// const getYear = ()=>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
// const user = {
//     name: 'sebastien',
//     year: 21
// };
// const Header = () =>{
// return (
//         <header>
//             {/* this Header {//getYear()}
//             <div>{user.name}</div>
//             <div>{user.year}</div> */}
//             <div>logo</div>
//             <input type="text"/>
//         </header>
//     )
// }


class Header extends Component{
    state = {
        keywords:'hello'
    }
    inputChangedHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }
    render(){
        console.log(JSON)
        return (
            <header>
                <div 
                className="logo"
                >logo</div>
                <input type="text"
                    onChange= {this.inputChangedHandler }
                />
                {/* {this.state.keywords} */}
            </header>
        )
    }
}
export default Header;