import React from 'react';
import './login.css';
// import { authenticateSignup } from '../../service/api';
import { Link } from 'react-router-dom';

// import './new.js';

const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});




function Login() {
    return (


        // <p>Hii purva</p>
        <>
            {/* <img className="wave" src="img\wave.png" alt="ketan" /> */}
            <div style={{ background: "#FBF8F1" }}>
                <div className="container">
                    <div className="img">
                        <img src="img/bg.svg" alt="anand" />
                    </div>
                    <div className="login-content">
                        <form action="index.html">
                            <img src="img/avatar.svg" alt="purva" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Username</h5> */}
                                    <input type="text" placeholder='Username' className="input" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    {/* <h5>Password</h5> */}
                                    <input type="password" placeholder='Password' className="input" />
                                </div>
                            </div>
                            <p>Forgot Password?<Link to="/signup">SignUp</Link></p>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Login;