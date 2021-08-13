import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import logo from "../../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/actions/globalActions';

const Container = ({ children }) => {
    const { page } = useParams();
    const isShow = useSelector(state => state.global.isSidebarShow);

    return (
        <ContainerWrapper>
            <div className={`sidebar ${isShow && "show" || ""}`}>
                <p className="fw-bold fs-3 mb-4">M{isShow && <span>enu</span>}</p>
                <ul className="menu">
                    <li>
                        <Link to="/" className={`${page == "home" && "active" || ""}`}>
                            <FontAwesomeIcon icon={faHome} />  {isShow && "Home"}
                        </Link>
                    </li>
                    <li><Link to="/dashboard/users" className={`${page == "users" && "active" || ""}`}>
                        <FontAwesomeIcon icon={faHome} /> {isShow && "Users"}
                    </Link></li>
                    <li><Link to="/dashboard/todos" className={`${page == "todos" && "active" || ""}`}>
                        <FontAwesomeIcon icon={faHome} /> {isShow && "Todos"}
                    </Link></li>
                    <li><Link to="/dashboard/albums" className={`${page == "albums" && "active" || ""}`}>
                        <FontAwesomeIcon icon={faHome} /> {isShow && "Albums"}
                    </Link></li>
                    <li><Link to="/dashboard/photos" className={`${page == "photos" && "active" || ""}`}>
                        <FontAwesomeIcon icon={faHome} /> {isShow && "Photos"}
                    </Link></li>
                    <li><Link to="/dashboard/posts" className={`${page == "posts" && "active" || ""}`}>
                        <FontAwesomeIcon icon={faHome} /> {isShow && "Posts"}
                    </Link></li>
                </ul>
            </div>
            <div className="rightside">
                <header className="px-2 py-3 shadow">
                    <Button color="light" onClick={toggleSidebar}>
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
