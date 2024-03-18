import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import classes from './About.module.css'

export function About() {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            .then((res) => (res.json()))
            .then((data) => {
                setItems(data.meals)
            })
    }, [])
    return(
        <div className="App-header">
            <Menu/>
            <ul className={classes.ApiList}>
                {items.map((itemData) => ((
                    <li>{itemData.strMeal} ({itemData.strCategory})</li>
                )))}
            </ul>
            <p>
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.
            </p>
        </div>
    )
}