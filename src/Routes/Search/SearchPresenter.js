import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

const SearchPresenter = ({
    moviesResults,
    tvResults,
    searchTerm,
    error,
    loading,
    handleSubmit,
}) => null;

SearchPresenter.propTypes = {
    moviesResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
