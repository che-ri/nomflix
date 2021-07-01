import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Message = ({ text, color }) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: ${props => props.color};
    font-weight: 600;
`;

export default Message;
