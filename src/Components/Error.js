import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Error = ({ text }) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
};

Error.propTypes = {
    text: PropTypes.string.isRequired,
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: #e74c3c;
    font-weight: 600;
`;

export default Error;
