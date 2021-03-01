import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import moduleName from 'module';

// ---------------------> Для дозагрузки
import axios from 'axios';
// import { whithCreadential, request } from './help/request';

class Form extends Component {
  state = {
    search: '',
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
    //  this.setState({
    //     search: ""
    //  })
  };

  submitHeandler = e => {
    e.preventDefault();
    console.log(e.target.value)
    // this.props.getSearch(this.state.search);
    console.log(this.state.search);

    //------------------> Для дозагрузки (нужно доработать)
    // axios
    //   .get(
    //     `https://api.github.com/search/repositories?q=react&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&q=${this.state.search}`,
    //   )
    //   .then(res => {
    //       console.log(res.data.items)
    //     this.props.getSearch(res.data.items);
    //   })
    //   .catch(error => {
    //     console.dir(error)
    //     this.setState({
    //       loader: false,
    //       error: true,
    //       text: error,
    //     });
    //   });
  };

  render() {
    return (
      <form className="form"
    //   onClick={this.submitHeandler}
      >
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleInput}
        ></input>
        <button className="button">Search</button>
      </form>
    );
  }
}

// Form.propTypes = {

// }

export default Form;
