import React from 'react'
import PropTypes from 'prop-types'

function ListItem({name}) {
    return (
        <li>
            <h2>{name}</h2>
        </li>
    )
}

ListItem.propTypes = {

}

export default ListItem

