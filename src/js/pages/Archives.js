import React from "react";

export default class Archives extends React.Component {
  render() {
    const query = new URLSearchParams(this.props.location.search)
    const article = this.props.match.params.article
    const message = (article ? article + ', ' : '')
      + 'date=' + query.get('date')
      + ', filter=' + query.get('filter');

    return (
      <h1>Archives ({message})</h1>
    );
  }
}
