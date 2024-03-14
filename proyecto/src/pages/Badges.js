import React from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading.js";
import PageError from "../components/PageError";

import { Link } from "react-router-dom";

import confLogo from "../images/badge-header.svg";

// api
import api from "../api";

import "./styles/Badges.css";
import MiniLoader from "../components/MiniLoader.js";

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };

    render() {
        if (this.state.loading == true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                src={confLogo}
                                alt="logo"
                                className="Badges_conf-logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />

                            <>{this.state.loading && <MiniLoader />}</>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Badges;
