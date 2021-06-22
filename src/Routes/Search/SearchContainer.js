import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    moviesResults: null,
    tvResults: null,
    searchTerm: '',
    loading: false,
    error: null,
  };

  render() {
    const { moviesResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        moviesResults={moviesResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
