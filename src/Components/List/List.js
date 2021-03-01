import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ListItem from '../ListItem/ListItem';
import './List.css';

function List({ repos, loader, error }) {
  return (
    <ul className="list">
      {error && <h1>Something went wrong</h1>}

      {loader ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={300}
          width={300}
          timeout={3000} //3 secs
        />
      ) : (
        repos.map(repo => {
          return <ListItem key={repo.id} {...repo} />;
        })
      )}
      {/* Loader - Для ожидания загрузки информации с бэкэнда */}
      {/* {repos.length > 0 ? 
          (repos.map(repo => {
          return <ListItem key={repo.id} {...repo} />;})) 
          : (<Loader
          type="Puff"
          color="#00BFFF"
          height={300}
          width={300}
          timeout={3000} //3 secs
        />
      )} */}
    </ul>
  );
}

List.propTypes = {};

export default List;
