import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";
export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        //searchTerm은 입력값이 담길 곳이다.
        searchTerm: "",
        loading: false,
        error: null,
    };

    handleSubmit = event => {
        event.preventDefault();
        const { searchTerm } = this.state;
        //만약에 검색내용이 빈 문자열이 아니라면 searchByTerm 함수 실행
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const {
            target: { value },
            //기존 이벤트 객체 안에 target:{value} 안에 input의 value가 담겨있다.
        } = event;
        this.setState({
            searchTerm: value,
            //value를 받아서 searchTerm에 저장한다.
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        // api.search()를 통해 searchTerm을 포함한 결과를 담습니다.
        try {
            const {
                data: { results: movieResults },
            } = await moviesApi.search(searchTerm);
            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);
            //결과값을 state에 저장합니다.
            this.setState({
                movieResults,
                tvResults,
            });
        } catch {
            this.setState({ error: "Can't find results." });
        } finally {
            this.setState({ loading: false });
        }
    };
    render() {
        const { movieResults, tvResults, searchTerm, loading, error } =
            this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                error={error}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}
