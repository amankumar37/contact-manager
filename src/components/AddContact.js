import React from "react";
import '../styles/AddContact.scss'


class AddContact extends React.Component {


  state = {
    id: 1,
    name: "",
    email: ""
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }

    this.props.addContact(this.state);
    this.setState({ id: this.state.id + 1, name: "", email: "" })
    return;
  }
  render() {

    return (
      <div className="ui main">
        <h2
        >Add Contact</h2>
        <form className="ui form" onSubmit={this.add} >
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} placeholder="Enter name" onChange={(e) => this.setState({ name: e.target.value })} />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />
          </div>

          <button className="ui button blue" type="submit" >Add</button>
        </form>
      </div>
    )

  }
}


export default AddContact;
