import React from "react";

class AddUser extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      bio: "",
      age: 1,
      isEurope: true,
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Name"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Last Name"
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <textarea
          placeholder="BIO"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          placeholder="Age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isEurope">Is Europe?</label>
        <input
          type="checkbox"
          id="isEurope"
          onChange={(e) => this.setState({ isEurope: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.first_name,
              lastName: this.state.lastName,
              bio: this.state.bio,
              age: this.state.age,
              isEurope: this.state.isEurope,
            };
            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
export default AddUser;
