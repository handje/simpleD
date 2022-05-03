import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Input, Button } from 'antd';



function Login({user,InputID,InputPWD,setInputID,setInputPWD,setUser}){
    function axiosPost(LoginUser) {
        axios.post("http://14.35.100.207:3000/users/login", LoginUser)
            .then((response) => {
                console.dir(response);
             })
            .catch((error)=>{console.log(error)})
      }

    function handleInputID(event){
        setInputID(event.target.value);
    }
    function handleInputPWD(event){
        setInputPWD(event.target.value);
    }
    function handleSubmitLogin(event){
        event.preventDefault();
        console.log("click")
        const LoginUser={user_id:InputID,user_password:InputPWD};
        setUser(LoginUser)
        setInputID("")
        setInputPWD("")
        axiosPost(LoginUser);
    }
    return(
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
                <Input type="text" className="ID" required placeholder="ID" onChange={handleInputID} value={InputID}></Input>
                <Input type="password" className="PWD" required placeholder="Password" onChange={handleInputPWD} value={InputPWD}></Input>
                <Button shape="circle" className="submitLogin">Login</Button>
            </form>
            <Link to="/register"><Button type="dashed">Dashed Button</Button></Link>
            <Link to="/register"><Button>Google</Button></Link>
        </div>
        
    );
}

export default Login;