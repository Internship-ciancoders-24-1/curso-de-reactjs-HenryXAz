import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => (
                    <li key={badge.id} className="mb-5">
                        <div className="BadgesListItem">
                            <img
                                className="BadgesListItem__avatar"
                                src={badge.avatarUrl}
                                alt={`${badge.firstName} ${badge.lastName}`}
                            />

                            <div>
                                <strong>
                                    {badge.firstName} {badge.lastName}
                                </strong>
                                <br />@{badge.twitter}
                                <br />
                                {badge.jobTitle}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default BadgesList;
