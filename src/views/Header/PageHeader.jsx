import React from "react"
import styled from "styled-components";
import { getMovieApi } from "../../redux/actionCreator.js"
import { connect } from "react-redux";

import Headertitle from "./Header_title"
import HeaderMain from "./Header_main"

const Ulstyle = styled.ul`
  display: flex;
  overflow: scroll;
  white-space: nowrap;
`

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie() {
      dispatch(getMovieApi())
    }
  }
}

class PageHeader extends React.Component {
  render() {
    return (
      <div className="App-header" style={{
        overflow: "scroll",
        whiteSpace: "nowrap"
      }
      } >
        <Headertitle />
        <HeaderMain />
        <Ulstyle>
          {
            this.props.list.map((e, i) => {
              return (
                <li key={i} style={{ paddingLeft: "10PX" }}>
                  <img src={e.url} alt="" style={{ width: "85px", height: "115px" }} />
                </li>
              )
            })
          }
        </Ulstyle>
      </div >
    )
  }

  componentDidMount() {
    this.props.getMovie();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)