import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import classes from './About.module.css'
import { useSearchParams, NavLink} from "react-router-dom";

export function About() {
    const [items, setItems] = useState([]);
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(params.get('page') || 1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPage = 10;
    const [letter, setLetter] = useState('c');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => (res.json()))
            .then((data) => {
                const newTotalItems = data.meals.length;
                setTotalItems(newTotalItems);
                const from = (page - 1) * itemsPage;
                const to = Math.min(from + itemsPage, newTotalItems);
                setItems(data.meals.slice(from, to));
            })
    }, [page, letter]);

    useEffect(() => {
        setPage(1); 
    }, [letter]);

    const totalPages = Math.ceil(totalItems / itemsPage);
    return(
        <div className="App-header">
            <Menu/>

            <ul className={classes.ApiList}>
                {items.map((itemData) => ((
                    <li key={itemData.idMeal}>
                        {itemData.strMeal} ({itemData.strCategory})
                    </li>
                )))}
            </ul>

            <ol className={classes.pages}>
                {[...Array(totalPages).keys()].map(( pageNum) => (
                    <li key={pageNum + 1}>
                        <NavLink 
                            className={classes.pageLink}
                            to={`/about?page=${pageNum + 1}`} 
                            onClick={() => {setPage(pageNum +1)}}
                        >
                            {pageNum + 1}
                        </NavLink>
                    </li>
                ))}
            </ol>

            <p>
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.
            </p>
        </div>
    )
}