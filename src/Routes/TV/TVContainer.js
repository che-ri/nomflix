import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: topRated },
            } = await tvApi.topRated();
            const {
                data: { results: popular },
            } = await tvApi.topRated();
            const {
                data: { results: airingToday },
            } = await tvApi.topRated();
            this.setState({ topRated, popular, airingToday });
        } catch {
            this.setState({ error: "TV프로그램 정보를 불러올 수 없어요!" });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { topRated, popular, airingToday, error, loading } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        );
    }
}
