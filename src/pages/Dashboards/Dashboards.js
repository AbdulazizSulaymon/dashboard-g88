import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import Home from '../Home';
import Users from '../Users';
import DashboardsWrapper from './DashboardsWrapper';

const Dashboards = () => {
    const { page } = useParams();
    console.log(page);

    return (
        <Container>
            <DashboardsWrapper>
                {page === "home" && <Home />}
                {page === "users" && <Users />}
            </DashboardsWrapper>
        </Container>
    )
}

export default Dashboards
