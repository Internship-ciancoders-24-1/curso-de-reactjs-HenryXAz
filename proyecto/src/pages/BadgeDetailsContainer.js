import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import "./styles/BadgeDetails.css";

import api from "../api"
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component
{
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    }

    componentDidMount()
    {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null,});

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId,
            )

            this.setState({data, loading: false, error: null,});
        } catch (error) {
            this.setState({loading: false, error});
        }
    }

    handleOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen: false})
    }

    handleDeleteBadge = async () => {
        this.setState({loading: true, error: null,})

        try {
            await api.badges.remove(this.props.match.params.badgeId) 
            this.setState({loading: false,})
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error,})
        }
    }



    render()
    {
        if (this.state.loading == true) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <BadgeDetails  
                badge={this.state.data}
                onOpenModal={this.handleOpenModal}
                onCloseModal={this.handleCloseModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
            />
        )
    }
}

export default BadgeDetailsContainer;