import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading: true,
        error: null,
    };

    //호출해야될 api동작들이 많다면 따로 밖에서 함수를 만들어서 componentDidMount 함수 안에 this.함수명 으로 넣어주어도 된다!
    async componentDidMount() {
        try {
            //비구조화할당 후 nowPlaying으로 명시하기!
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();
            const {
                data: { results: popular },
            } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular,
            });
        } catch {
            this.setState({
                error: "영화정보를 불러올 수 없어요!",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }
    render() {
        console.log(this.state);
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}
