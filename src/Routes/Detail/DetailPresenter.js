import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const DetailPresenter = ({ result, error, loading }) => {
    console.log(result);
    return loading ? (
        <Loader />
    ) : (
        <Container>
            <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
            />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                            : require("../../asset/no_poster.png").default
                    }
                />
                <Data>
                    <Title>{result.title ? result.title : result.name}</Title>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? `${result.release_date.substring(0, 4)}년`
                                : `${result.first_air_date.substring(0, 4)}년`}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.runtime
                                ? `${result.runtime}분`
                                : `${result.episode_run_time}분`}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.genres &&
                                result.genres.map((genre, idx) =>
                                    //genres의 마지막 index만 글자뒤에 &를 붙이지 않기 위함!
                                    idx === result.genres.length - 1
                                        ? genre.name
                                        : `${genre.name}/`
                                )}
                        </Item>
                    </ItemContainer>
                    <Overview>
                        {result.overview ? result.overview : "내용이 없어요!"}
                    </Overview>
                </Data>
            </Content>
        </Container>
    );
};

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;
const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 2;
    width: 100%;
`;

export default DetailPresenter;
