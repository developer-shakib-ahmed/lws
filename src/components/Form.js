import React from 'react';

export default class Form extends React.Component {
  state = {
    title: 'Demo text',
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    const { title } = this.state;
    console.log(title);
    return (
      <form>
        <p>
          <input
            type="text"
            placeholder="Enter your text"
            value={title}
            onChange={this.handleChange}
          />
        </p>
      </form>
    );
  }
}
