/* global window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfoPanel from './InfoPanel'

const WIDTH_OFFSET = 240
const HEIGHT_OFFSET = 64

export default class Modules extends Component {

  render() {
    const {route: {childComponent}} = this.props
    const ModuleComponent = childComponent
    return (
      <div className="flexbox-item flexbox-item--fill">
        <ModuleComponent containerComponent={InfoPanel} />
      </div>
    )
  }

}

Modules.contextTypes = {
  router: PropTypes.object
}
