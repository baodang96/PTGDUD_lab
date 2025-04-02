import { Link } from 'react-router-dom'

import './Nav.css'

function Nav() {
    return (
        <>
            <div className="nav">
                <ul>
                    <li><Link>Link 1</Link></li>
                    <li><Link>Link 2</Link></li>
                    <li><Link>Link 3</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;