import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-2">
                  <NavLink to={"/"} className="navbar-brand p-0"><h1 className="logo">Vendito</h1></NavLink>
                  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <i className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <NavLink to={"/services"} className="nav-item nav-link"><i className="bi bi-search"></i></NavLink>
                        <li className="nav-item dropdown">
                            <NavLink to={"/about"} className={"nav-link dropdown-toggle"} role={"button"} data-bs-toggle={"dropdown"} aria-expanded={"false"}>
                                My Account
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                        </li>
                        <NavLink to={"/services"} className="nav-item nav-link">help</NavLink>
                        <NavLink to={"/projects"} className="nav-item nav-link">Sign in</NavLink>
                        <NavLink to={"/contact"} className="nav-item nav-link">Sign up</NavLink>
                    </div>            
                </div>
            </nav>
            <div className="container wrap">
                <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                 <button type="submit" className="searchButton">
                 <i className="bi bi-search"></i>
                </button>
                </div>
             </div>
            </>
    )
}