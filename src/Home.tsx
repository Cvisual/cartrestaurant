import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/restaurant/6d38692'}>Restaurant</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
