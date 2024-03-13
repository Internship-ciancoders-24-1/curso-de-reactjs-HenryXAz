import React from "react";

class BadgeForm extends React.Component {
    // state = {};
 
    // handleChange = (e) => {
    // // console.log({value: e.target.value, name: e.target.name});
    //     this.setState({
    //     [e.target.name]: e.target.value,
    //     });
    // };

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
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}

export default BadgeForm;
