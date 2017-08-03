
var React = require("react");
var Link = require('react-router').Link;

var LandingPage = React.createClass({
    render: function() {
        return (
    
<div>
    <span id="splash-overlay" className="splash"></span>
    <span id="welcome" className="z-depth-4"></span>

            <main className="valign-wrapper">
                <span className="container grey-text text-lighten-2 ">

                    <p className="flow-text">Welcome to</p>
                    <h1 className="title grey-text">SideLine</h1>

                    <blockquote className="flow-text">A one stop shop for Coach's team communication and management</blockquote>

                    <div className="center-align">
                        {/*Dropdown Trigger*/}
                        <a className="btn dropdown-button modal-trigger" href="#modal1" data-activates="signin">Start Here</a>

                        {/*Modal Structures (maybe use react for this?)*/}
                        <div id='modal1' className="modal">
                            <div className="modal-content">
                                <div className="toggle">
                                    <i className="large material-icons person_add"></i>
                                    <div className="btn tooltipped" data-position="right">Sign Up</div>
                                </div>

                                <div className="card login-register login-reset">
                                    <h1 className="title">Login</h1>
                                    <form> 
                                        <div className = "input-container has-feedback">
                                            <input type="text" id="Username" name="Username" required autoComplete="off" pattern="[\w_-]{3,20}" title="Must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."/>
                                            <label htmlFor="Username">Username</label>
                                            <i className="fa fa-user form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>

                                        <div className = "input-container has-feedback">
                                            <input type="password" id="Password" name="Password" required autoComplete="off" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}" title="Must contain at least one number and one uppercase and lowercase letter, and from 8 to 20 characters."/>
                                            <label htmlFor="Password">Password</label>
                                            <i className="fa fa-lock form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>

                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" id="remember-me" checked />>
                                                <span className="cr"><i className="cr-icon fa fa-rocket"></i></span>
                                                    Remember me
                                            </label>
                                        </div>

                                        <div className="button-container">
                                            <button className="rkmd-btn btn-lightBlue ripple-effect float-right"><span>Sign in</span></button>
                                        </div>

                                        <div className="footer">
                                            <Link to="http://www.google.com">Forgot your password?</Link>
                                        </div>
                                    </form>
                                </div>

                                <div className="card login-register">
                                    <h1 className="title">Create an account</h1>
                                    <form> 
                                        <div className = "input-container has-feedback">
                                            <input type="text" id="Username" name="Username" required autoComplete="off" pattern="[\w_-]{3,20}" title="Username must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."/>
                                            <label htmlFor="Username">Username</label>
                                            <i className="fa fa-user form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>

                                        <div className = "input-container has-feedback">
                                            <input type="email" id="E-mail" name="E-mail" required pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+" title="Not an e-mail!" autoComplete="off"/>
                                            <label htmlFor="E-mail">E-mail</label>
                                            <i className="fa fa-envelope form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>

                                        <div className = "input-container has-feedback">
                                            <input type="password" id="Password" name="Password" required autoComplete="off" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}" title="Password must contain at least one number and one uppercase and lowercase letter, and from 8 to 20 characters."/>
                                            <label htmlFor="Password">Password</label>
                                            <i className="fa fa-lock form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>

                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" id="terms" required />>
                                                <span className="cr"><i className="cr-icon fa fa-rocket"></i></span>
                                                    I accept something I never read
                                            </label>
                                        </div>
                                        <div className="button-container">
                                            <button><span>Register</span></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card login-reset">
                                    <h1 className="title">Reset password</h1>
                                    <p className="reset-info">Password reset instruction will be send to your e-mail.</p>

                                    <form> 
                                        <div className = "input-container has-feedback">
                                            <input type="email" id="E-mail" name="E-mail" required  pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+" title="Not an e-mail!" autoComplete="off"/>
                                            <label htmlFor="E-mail">E-mail</label>
                                            <i className="fa fa-envelope form-control-feedback"></i>
                                            <div className="check"></div>
                                            <div className="bar"></div>
                                        </div>
                                        <div className="button-container">
                                            <button><span>Reset</span></button>
                                        </div>
                                        <div className="footer"><a href="#">Back to Login</a></div>
                                    </form>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <a href='#!' className="modal-action modal-close">X</a>
                            </div>
                        </div>
                    </div>
                </span>
            </main>
        </div>
        );
    }

});

module.exports = LandingPage;