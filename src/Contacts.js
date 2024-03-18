import { Menu } from "./Menu";
import './Contacts.module.css'

export function Contacts() {
    return(
        <div className="App-header">
            <Menu/>
            <div>
                <div>Facebook: <a target="_blank" href="https://www.facebook.com/react">https://www.facebook.com/react</a></div>
                <div>Facebook: <a target="_blank" href="https://twitter.com/reactjs">https://twitter.com/reactjs</a></div>
            </div>
        </div>
    )
}