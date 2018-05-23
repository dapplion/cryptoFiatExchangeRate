import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'
import AppStore from './stores/AppStore'
import * as AppActions from './actions/AppActions'


export default class CalendarDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: moment.unix(AppStore.getTimestamp())
    };
  }

  // onDateChange(date) {
  //   let timestamp = moment(date).startOf('date').add(12, 'hours').unix();
  //   console.log('GOT TS ',timestamp)
  //   AppActions.updateTimestamp(timestamp)
  // }

  handleChange(date) {
    this.setState({ date });
    let timestamp = date.startOf('date').add(12, 'hours').unix();
    AppActions.updateTimestamp(timestamp)
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="margin-auto">
          <ReactDatePicker
            className="calendar-input"
            todayButton={"Today"}
            maxDate={moment()}
            selected={this.state.date}
            onChange={this.handleChange.bind(this)}
            dateFormat="ddd, MMMM Do YYYY"
          />
      </div>
    )
  }
}
