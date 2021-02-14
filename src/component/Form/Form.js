import React from "react";
import s from "./Form.module.css";

class Form extends React.Component {
  state = {
    query: "",
  };

  handleQuery = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Искать</span>
        </button>

        <input
          className={s.input}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleQuery}
          placeholder="Найти фильм"
        />
      </form>
    );
  }
}

export default Form;
