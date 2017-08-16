import React, { Component } from 'react';
import { Link } from 'react-router'
class componentName extends Component {
    render() {
        return (
            <div className="login_wrapper">
                <div id="register" className="login_form">
                    <section className="login_content">
                        <form>
                            <h1>Create Account</h1>
                            <div>
                                <input type="text" className="form-control" placeholder="Username" required="" />
                            </div>
                            <div>
                                <input type="email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div>
                                <input type="password" className="form-control" placeholder="Password" required="" />
                            </div>
                            <div>
                                <Link className="btn btn-default submit" to='/'>Submit</Link>
                            </div>

                            <div className="clearfix"></div>

                            <div className="separator">
                                <p className="change_link">Have a account ?
                                <Link to='/'  className="to_register"> Log in </Link>
                                </p>
                                <div className="clearfix"></div>
                                <br />
                                <br />
                                <div>
                                    <h2><i className="fa fa-cloud"></i> Alumni KMUTT</h2>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}

export default componentName;