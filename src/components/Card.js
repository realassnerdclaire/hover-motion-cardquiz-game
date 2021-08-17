import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./index.css";

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="card  rb-hover">
          <div className="imgBx">
            <img src={this.props.src} alt="banner"></img>
          </div>
          <div className="details">
            <h2>
              {this.props.heading}
              <br />
              <span>{this.props.detail}</span>
              {/* </br> */}
            </h2>
          </div>
        </div>
        {/* <div class="card">
          <div class="imgBx">
            <img
              src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1506/tonobalaguer150601019/41299779-couple-young-walking-on-the-beach-palm-tree-in-summer-vacation.jpg"
              alt="banner"
            ></img>
          </div>
          <div class="details">
            <h2>
              Outdoor
              <br />
              <span>I am social!</span>
              </br>
            </h2>
          </div>
        </div>  */}
      </>
    );
  }
}
