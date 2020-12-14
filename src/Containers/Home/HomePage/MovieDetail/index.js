import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetMovieDetail } from "./modules/action";
import LoadingComponent from "../../Components/loading";
import HeaderComponent from "../../Components/header/header";
class MovieDetailComponent extends Component {
  componentDidMount() {
    this.props.actGetMovieDetail(this.props.match.params.id);
  }
  renderMovieDetail = () => {
    let { movieDetail } = this.props;
    if (movieDetail && movieDetail !== null) {
      return (
        <div className="row">
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src={this.props.movieDetail.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-sm-6"> dsajkhdsajkhasdkj</div>
        </div>
      );
    }
  };
  render() {
    let { loading, err } = this.props;
    if (loading) {
      return (
        <>
          <HeaderComponent />
          <LoadingComponent />
        </>
      );
    }
    if (err) {
      return <h5>Something was wrong</h5>;
    }
    return (
      <>
        <HeaderComponent />
        <div className="container">
          <div className="row">{this.renderMovieDetail()}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
    err: state.movieDetailReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetMovieDetail: (id) => {
      dispatch(actGetMovieDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailComponent);
