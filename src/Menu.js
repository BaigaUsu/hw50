import { NavLink } from "react-router-dom";

export function Menu() {
    return(
        <div>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>
            </ul>
        </div>
    )
}