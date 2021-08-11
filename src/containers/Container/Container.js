import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import logo from "../../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

const Container = ({ children }) => {
    const { page } = useParams();

    return (
        <ContainerWrapper>
            <div className="sidebar">
                <p className="fw-bold fs-3 mb-4"> Menu</p>
                <ul className="menu">
                    <li>
                        <Link to="/" className={`${page == "home" && "active" || ""}`}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    <li><Link to="/dashboard/users" className={`${page == "users" && "active" || ""}`}>Users</Link></li>
                    <li><Link to="/dashboard/todos" className={`${page == "todos" && "active" || ""}`}>Todos</Link></li>
                    <li><Link to="/dashboard/albums" className={`${page == "albums" && "active" || ""}`}>Albums</Link></li>
                    <li><Link to="/dashboard/photos" className={`${page == "photos" && "active" || ""}`}>Photos</Link></li>
                    <li><Link to="/dashboard/posts" className={`${page == "posts" && "active" || ""}`}>Posts</Link></li>
                </ul>
            </div>
            <div className="rightside">
                <header className="px-2 py-3 shadow">
                    <Button color="light">
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <img src={logo} className="logo" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container
