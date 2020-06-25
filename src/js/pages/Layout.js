import React from "react";
import { Link, withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.push("/");
  }
  render() {
     return (
       <div>
         <h1>KillerNews.net</h1>
         {this.props.children}
         <Link to="/archives" className="btn btn-danger">archives</Link>
         <Link to="/settings" className="btn btn-success">settings</Link>
        <button className="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
       </div>
     );
   }
 }

 export default withRouter(Layout);
