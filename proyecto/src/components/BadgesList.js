import React from "react";

import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter((badge) => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badges, query]);

    return {query, setQuery, filteredBadges};
}

function BadgesList(props) {
    const badges = props.badges;
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if (filteredBadges.length == 0) {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="search">
                        Filtered Badges
                        <input
                            type="text"
                            name="search"
                            id=""
                            className="form-control mb-4"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                    </label>
                </div>
                <h3>No encontramos ningún badge</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create New Badge
                </Link>
            </div>
        );
    }

    return (
        <div className="Badges__list">
            <div className="form-group">
                <label htmlFor="search">
                    Filtered Badges
                    <input
                        type="text"
                        name="search"
                        id=""
                        className="form-control mb-4"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </label>
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map((badge) => (
                    <li key={badge.id} className="mb-5">
                        <Link
                            className="text-reset text-decoration-none"
                            to={`/badges/${badge.id}`}
                        >
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
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BadgesList;
