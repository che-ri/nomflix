import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
    padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
    loading ? null : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map((movie) => (
                        <div>{movie.name}</div>
                    ))}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    {airingToday.map((movie) => (
                        <div>{movie.name}</div>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map((movie) => (
                        <div>{movie.name}</div>
                    ))}
                </Section>
            )}
        </Container>
    );

//필수 정보는 error!
TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TVPresenter;
