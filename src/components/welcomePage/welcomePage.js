import React, { Component } from "react";
import { connect } from "react-redux";
import { SetSelected } from "../../actions/actions";
import "./welcomePage.css";
import tick from "../../components/welcomePage/welcomePageImages/tick.png";

class WelcomePage extends Component {
  state = {
    selected: false
  };

  handleSelectClick = index => {
    this.props.SetSelected(index);
  };

  renderItems = () => {
    return this.props.info.titles.map((result, index) => {
      return (
        <div
          key={index}
          className={"items" + (result.selected ? " selected" : "")}
        >
          <div
            className={result.selected ? "check-box-selected" : "check-box"}
            onClick={() => this.handleSelectClick(index)}
          >
            {result.selected && <img className="tick" src={tick} />}
          </div>
          {result.title}
          <img className="logo" src={result.url} alt="" />
        </div>
      );
    });
  };

  handleSubmition = () => {
    this.props.history.push("/success");
  };

  render() {
    return (
      <div>
        <div className={"welcome-container"}>
          <strong className="recomendation-title">
            Book Recomendations Just For You
          </strong>
          <div className="instruction-title">
            Choose from the catagories below and we will send you information
            about books you will love
          </div>
          <div className="items-container">{this.renderItems()}</div>

          {this.props.info.selected && (
            <div>
              <div className="join-our-newsletter">
                Join our news letter so we can send you book recomendations
              </div>
              <div className="Group-5">
                <div className="input-container">
                  <input className="input-box1" placeholder="First name *" />
                  <input className="input-box1" placeholder="Last name *" />
                </div>
                <div className="subscribe-container">
                  <input
                    className="input-box2"
                    placeholder="Your email address *"
                  />
                  <div
                    className="subscribe-button"
                    onClick={() => {
                      this.handleSubmition();
                    }}
                  >
                    Subscribe
                  </div>
                </div>
                <div className="policy-container">
                  <div className="private-policy-box" />
                  <div className="private-policy-text">
                    I agree to the <strong>Privacy Policy</strong> and i am over
                    the age of 16
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { info: state };
};

const mapDispatchToProps = dispatch => {
  return {
    SetSelected: index => dispatch(SetSelected(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
