import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
    padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
    //마운트가 끝나기 전까지는 nowPlaying, upcoming, popular 값이 생성되지 않기 때문에
    //마운트가 끝나는 시점! 말 그대로 loading이 false가 될때 위의 값을 사용하도록 설정한다.
    //null 값을 사용하면 아무것도 렌더링하지 않는다.
    loading ? null : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map((movie) => (
                        <div>{movie.title}</div>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    {upcoming.map((movie) => (
                        <div>{movie.title}</div>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="popular Movies">
                    {popular.map((movie) => (
                        <div>{movie.title}</div>
                    ))}
                </Section>
            )}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default HomePresenter;
