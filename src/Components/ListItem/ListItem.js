import React from 'react'
import PropTypes from 'prop-types'
import "./ListItem.css"

function ListItem({full_name, owner}) {
    const{avatar_url, login, type}=owner
    return (
        <li className="card">
            <img className="card-img" src={avatar_url}></img>
            <h4 className="card-title">{full_name}</h4>
            <p className="card-text">{login}</p>
            <p className="card-text">{type}</p>
        </li>
    )
}

ListItem.propTypes = {

}

export default ListItem

