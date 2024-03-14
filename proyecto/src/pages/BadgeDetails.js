import React from "react";
import ReactDOM from "react-dom";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Modal from "../components/Modal";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
    const badge = props.badge;

    return (
        <>
            <div className="BadgeDetails__hero">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div class="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div class="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>

                                <Link
                                    className="btn btn-primary mb-4"
                                    to={`/badges/${badge.id}/edit`}
                                >
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BadgeDetails;
