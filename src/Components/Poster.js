import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import no_poster from "asset/no_poster.png";

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
                <ImageContainer>
                    <Image
                        bgUrl={
                            imageUrl
                                ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
                                : no_poster
                        }
                    />
                    <Rating>
                        <span role="img" aria-label="rating">
                            ⭐
                        </span>
                        {rating}/10
                    </Rating>
                </ImageContainer>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </Container>
        </Link>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

const Image = styled.div`
    background: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 5px;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Container = styled.div`
    font-size: 12px;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;

    //width에 넘치는 문자는 잘라내기
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

export default Poster;
