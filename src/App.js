import React, { Component } from 'react';
import List from './Components/List/List';
import Form from './Components/Form/Form'
import axios from 'axios';

import { whithCreadential, request } from './help/request';


export default class App extends Component {
  state = {
    repos: [],
    users: [],
    loader: true,
    error: false,
    text: '',
    search: '',
  };

  // --------------------------------------> Через then
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/repositories?q=react&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
      )
      .then(res => {
        const result = res.data.items;
        console.log(result);
        this.setState({
          repos: [...result],
          loader: false,
        });
      })
      .catch(error => {
        console.dir(error)
        this.setState({
          loader: false,
          error: true,
          text: error,
        });
      });
  }
  // --------------------------------------> Через then и с помощю дополнительного файла help
  // componentDidMount() {
  //   axios
  //   .get(whithCreadential("https://api.github.com/search/repositories?q=react&"))
  //   .then((res) => {
  //     const result = res.data.items;
  //     console.log(result)
  //     this.setState({
  //       repos: [...result],
  //     })
  //   })
  // }

  // // --------------------------------------> Через асинхронность
  // async componentDidMount() {
  //   const result = await axios
  //   .get(whithCreadential("https://api.github.com/search/repositories?q=react&"))
  //     this.setState({
  //       repos: [...result.data.items],
  //     })
  //   }

  // --------------------------------------> Через асинхронность и с помощю дополнительного файла help
  // componentDidMount() {
  //   const url = whithCreadential("https://api.github.com/search/repositories?q=react&")
  //   const result = request('get', url).then(data =>
  //     this.setState({
  //       repos: [...data.items],
  //     })
  //   )
  // }
//----------------------------------------> ДОЗАГРУЗКА (нужно доработать)!!!!
//   componentDidUpdate() {
//     const{search} = this.state
//     const url = whithCreadential(`https://api.github.com/search/repositories?q=${search}`)

//     const result = request('get', url).then(res => {
//       const result = res.data.items;
//       console.log(result);
//       this.setState({
//         repos: [...result],
//         loader: false,
//       });
//     })
//     .catch(error => {
//       console.dir(error)
//       this.setState({
//         loader: false,
//         error: true,
//         text: error,
//       });
//     });
// }


  getSearch = (data) => {
    this.setState({
      search: [...data],
    })
  }

//  searchValue = () => {

//  }


  render() {
    return (
      <div>
        <Form
        getSerach={this.getSearch}
        />
        <List
          repos={this.state.repos}
          loader={this.state.loader}
          error={this.state.error}
        />
      </div>
    );
  }
}
