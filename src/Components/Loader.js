import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin-top: 20px;
`;

const Loader = () => (
    <Container>
        <span role="img" aria-label="Loading">
            로딩중 🐢
        </span>
    </Container>
);

export default Loader;
