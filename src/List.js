import React from 'react'
import ListItem from './ListItem'

function List({item}) {
  return (
    <ul>
      {item.map(item =>(<ListItem key={item.id} item={item}/>))}
    </ul>
  )
}

export default List
