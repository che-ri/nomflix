import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = ({ location: { pathname } }) => {
    return (
        <StyledHeader>
            <StyledList>
                <StyledItem current={pathname === "/"}>
                    <StyledLink to="/">Movie</StyledLink>
                </StyledItem>
                <StyledItem current={pathname === "/tv"}>
                    <StyledLink to="/tv">TV</StyledLink>
                </StyledItem>
                <StyledItem current={pathname === "/search"}>
                    <StyledLink to="/search">Search</StyledLink>
                </StyledItem>
            </StyledList>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const StyledList = styled.ul`
    display: flex;
`;

const StyledItem = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid
        ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
    display: block;
    line-height: 50px;
`;

export default withRouter(Header);
