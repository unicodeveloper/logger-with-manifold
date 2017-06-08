import React, { Component } from 'react';
import ActivityIndicator from 'react-activity-indicator';
import { logNewApp } from '../utils/logger-api';


class RegisterApp extends Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      adding: true,
      showLoader: false
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleFormReset = () => {
    this.appName.value = "";
    this.appDesc.value = "";
  }

  handleFormDataApiSync = () => {

    this.setState({ showLoader: true });

    var formData = {
      app_name: this.appName.value,
      app_description: this.appDesc.value,

    };

    var _this = this;

    logNewApp(formData).then(response => {
      _this.setState({ adding: false });
      console.log("Data", response);
      _this.setState({ showLoader: false });
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.handleFormDataApiSync();
    this.handleFormReset();
  }

  render() {

    const { loading, adding, showLoader }  = this.state;

    return (
      <div>

        <h3 className="text-center">Test Logger</h3>
        <a className="btn btn-lg btn-success" target="_blank" href="https://app.logdna.com/82449de5ea/logs/view">View LogDNA Service</a>
        <hr/>

        <div className="col-sm-12" >
          { showLoader ? <div className="alert alert-default"><ActivityIndicator number={5} duration={200} activeColor="#d9534f" borderWidth={2} borderRadius="50%" diameter={25} /></div> : '' }
          { adding ? '' : <div className="alert alert-success"> Your app has been logged successfully </div> }

          <form ref="create_form" onSubmit={ this.handleFormSubmit }>
            <div className="form-group">
              <label> Application Name: </label>
              <input type="text" className="form-control" ref={(input) => { this.appName = input; }} placeholder="Enter your app name" required />
            </div>
            <div className="form-group">
              <label> Application Description: </label>
              <textarea className="form-control" ref={(input) => { this.appDesc = input; }} placeholder="Enter your app description" required ></textarea>
            </div>
            <div>
              <input className="btn btn-small btn-info" type="submit" value="Log New App" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterApp;
