import React from 'react'

function NavItem(props){
    return(
        <li className="nav-item ">
            <a href={props.link} className="nav-link">
                {props.name}
            </a>
        </li>
    )    
}

export default NavItem