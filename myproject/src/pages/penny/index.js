import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeAction } from '../../actions/penny'
class Penny extends Component {
  render() {
    return (
      <>
        <div>penny</div>
        <p>{this.props.penny.title}</p>
        <button
          onClick={() => {
            this.props.getChange()
          }}
        >
          触发dispatch
        </button>
      </>
    )
  }
}
let mapStateToProps = ({ penny }) => ({ penny })

let mapDispatchToProps = dispatch => ({
  getChange(payload) {
    dispatch(getChangeAction(payload))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Penny)
