import React from "react";

class BadgeForm extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log("button was clicked");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
    return (
      <div> 
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              First Name
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="firstName"
                value={this.props.formValues.firstName}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="lastName"
                value={this.props.formValues.lastName}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="email"
                name="email"
                value={this.props.formValues.email}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">
              Job title
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="jobTitle"
                value={this.props.formValues.jobTitle}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="twitter">
              Twitter
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                value={this.props.formValues.twitter}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 btn btn-primary block"
          >
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
