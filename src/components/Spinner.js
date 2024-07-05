import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-1' style={{height: '100px', width: '100px'}} src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
