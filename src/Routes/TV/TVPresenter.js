import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

//컴포넌트
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Message";
import Poster from "Components/Poster";

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
    <>
        <Helmet>
            <title>TV Shows | Nomflix</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title="Top Rated Shows">
                        {topRated.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={
                                    show.first_air_date &&
                                    show.first_air_date.substring(0, 4)
                                }
                            ></Poster>
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title="Airing Today">
                        {airingToday.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={
                                    show.first_air_date &&
                                    show.first_air_date.substring(0, 4)
                                }
                            ></Poster>
                        ))}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular Shows">
                        {popular.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={
                                    show.first_air_date &&
                                    show.first_air_date.substring(0, 4)
                                }
                            ></Poster>
                        ))}
                    </Section>
                )}
                {error && <Error text={error} />}
            </Container>
        )}
    </>
);

//필수 정보는 error!
TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

const Container = styled.div`
    padding: 20px;
`;

export default TVPresenter;
