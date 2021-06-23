import { moviesApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    moviesResults: null,
    tvResults: null,
    //searchTerm에 입력값이 담길 것이다.
    searchTerm: '',
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    //만약에 검색내용이 빈 문자열이 아니라면 searchByTerm 함수 실행
    if (searchTerm !== "") this.searchByTerm()
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      this.setState({ loading: true })

      // api.search()를 통해 searchTerm을 포함한 결과를 담습니다.
      const { data: { results: movieResults } } = await moviesApi.search(searchTerm)
      const { data: { results: tvResults } } = await tvApi.search(searchTerm)

      //결과값을 state에 저장합니다.
      this.setState({ movieResults, tvResults })

    } catch {
      this.setState({ error: "Can't find result." })
    } finally {
      this.setState({ loading: false })
    }
  }


  render() {
    const { moviesResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        moviesResults={moviesResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
