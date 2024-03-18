import { NavLink } from "react-router-dom";
import classes from './Menu.module.css'

export function Menu() {
    return(
        <ul className={classes.Menu}>
            <li><NavLink className={classes.MenuLink} to='/'>Main</NavLink></li>
            <li><NavLink className={classes.MenuLink} to='/about'>About</NavLink></li>
            <li><NavLink className={classes.MenuLink} to='/contacts'>Contacts</NavLink></li>
        </ul>
        
    )
}