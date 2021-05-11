import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreem = () => {
    return (
        <>
            <h3 className="auth__login">Register</h3>

            <form>
                <input 
                type="text"
                placeholder="Nombre"
                name="name"
                className="auth__input"
                autoComplete="off"                
                />
                <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"                
                />
                <input 
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                autoComplete="off"
                />
                <input 
                type="password"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                autoComplete="off"
                />

                <button
                    className="btn btn-primary btn__block mb-3 mt-2"
                    type="submit"                
                >
                    login
                </button>                            
                <br/>
                <br/>
                                
                <Link to="/auth/login"
                    className="link"
                >
                    Already Register?
                </Link>
            </form>
        </>
    )
}
