import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading"

import md5 from "md5";

import api from "../api";

// styles
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
            avatarUrl: "",
        },
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async (e) =>
    {
        e.preventDefault();
        this.setState({loading: true, error: null,});

        try {
            // const hash = md5(this.props.form.email ?? "");
            // const avatar = `https://www.gravatar.com/avatar/${hash}?id=identicon`;
            // this.setState({...this.state,[this.state.form.avatarUrl]: avatar})

            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error) {
           this.setState({
            loading: false,
            error,
           }) 
        }
    }


    render() {
        if (this.state.loading === true) {
            return <PageLoading />
        }


        return (
            <>
                <div className="BadgeNew__hero">
                    <img className="image-fluid BadgeNew__hero-image" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BadgeNew;
