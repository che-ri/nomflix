import React from "react";
import styled from "styled-components";

const Loader = () => (
    <Container>
        <span role="img" aria-label="Loading">
            로딩중 🐢
        </span>
    </Container>
);

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding-top: 20px;
`;

export default Loader;
