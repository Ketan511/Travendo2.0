// import { RepeatRounded } from '@material-ui/icons';
import React from 'react';
import './signup.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import {Link} from 'react-router-dom';



const SignUp = () => {
    return (
        <div style={{ color: "#fff", background: "#FBF8F1", fontFamily: "Roboto ,sanserif" }}>
            <div className="signup-form" >
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                            <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
                
            </div>

        </div>

    )

}

export default SignUp;
