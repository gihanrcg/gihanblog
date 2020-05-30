import React, { Component } from "react";
// import "bootstrap-css-only";

import NewComment from "./NewComment";
import Comments from './Comments';
import base from './base';

import './CommentStyles.css'


// import FontAwesomeIcon from "@fortawesome/react-fontawesome";


class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: ""
    };

    this.refComments = base.syncState("comments", {
      context: this,
      state: "comments"
    });

    this.props.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
       
      } else {
        this.setState({ isLoggedIn: false, user: {} });
      }
    });
  }

  postNewComment(comment) {
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    };
    const comments = {
      ...this.state.comments
    };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments: comments
    });
    console.log(comments)
    console.log(this.state.comments)
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider]);
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.state.isLoggedIn && (
            <div className="user">
              <img
                className="photo"
                alt={this.state.user}
                src={this.state.user.photoURL}
              />
              <h5 className="display-name"> {this.state.user.displayName} </h5>
              <p className="email"> {this.state.user.email} </p>
              <NewComment postNewComment={this.postNewComment} />
              <button
                className="btn btn-outline-secondary"
                onClick={() => this.props.auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          )}
          {!this.state.isLoggedIn && (
            <div className="alert alert-dark">
              <h1 className="title">ReactJS Comments App</h1>
              <label className="sign-in">Sign in: </label>
              <button
                className="btn btn-danger"
                onClick={() => this.auth("google")}
              >
                {/* <FontAwesomeIcon icon={["fab", "google"]} /> */}
                Google
              </button>
            </div>
          )}
          <Comments comments={this.state.comments} />
        </div>
        
      </div>
    );
  }
}

export default CommentSection;