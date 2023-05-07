import React, { type ReactElement } from 'react'
import SearchableGrid from '../components/searchableGrid/SearchableGrid'
import { algorithmData } from '../constants/algorithmData'
import Body from '../components/layout/Body'
import { Outlet } from 'react-router-dom'

const Algorithms = ():ReactElement => {
  return (
    <Body>
      <h1>Algorithms List</h1>
      <SearchableGrid data={algorithmData}/>

      <Outlet />
    </Body>
  )
}

export default Algorithms