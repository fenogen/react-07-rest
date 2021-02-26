import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

function List({repos}) {
    return (
        <ul>
            {repos.map((repo) => {
            return (<ListItem key={repo.id}
            {...repo}/>)
            })}
        </ul>
    )
}

List.propTypes = {

}

export default List

