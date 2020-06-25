import React from "react";

export default class Settings extends React.Component {
  render() {
    const mode = this.props.match.params.mode
    const type = mode === 'extra' ? '(this is extra)' :
      mode === 'main' ? '(this is main)' : '';
    return (
      <h1>Settings{type}</h1>
    );
  }
}
