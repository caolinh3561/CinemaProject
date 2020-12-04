import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetMovieSchedule } from "./modules/action";

class HeThongRapComponent extends Component {
  componentDidMount = () => {
    this.props.actGetMovieSchedule();
  };
  handleClick = (item) => {
    this.props.maHTR(item);
  };
  renderHTRC = () => {
    let { data } = this.props;
    if (data && data.length > 0) {
      return data.map((item, index) => {
        return (
          <li
            className="list-group-item"
            style={{ padding: 0 }}
            key={index}
            onClick={() => {
              this.handleClick(item);
            }}
          >
            <img
              src={item.logo}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </li>
        );
      });
    }
  };
  render() {
    return <ul className="list-group">{this.renderHTRC()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.heThongRapReducer.loading,
    data: state.heThongRapReducer.data,
    err: state.heThongRapReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetMovieSchedule: () => {
      dispatch(actGetMovieSchedule());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeThongRapComponent);
