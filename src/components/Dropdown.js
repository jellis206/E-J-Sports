import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';


function Dropdown(props) {
    const parent = props.parent;
    const MenuItems = [
        {
            title: 'Teams',
            path: parent + '/teams',
            cName: parent + 'dropdown-link'
        },
        {
            title: 'Schedule',
            path: parent + '/schedule',
            cName: parent + 'dropdown-link'
        },
        {
            title: 'Stats',
            path: parent + '/stats',
            cName: parent + 'dropdown-link'
        }
    ];
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={ handleClick }
                className={ click ? parent + ' dropdown-menu clicked' : parent + ' dropdown-menu' }
            >
                { MenuItems.map((item, index) => {
                    return (
                        <li key={ index }>
                            <Link
                                className={ item.cName }
                                to={ item.path }
                                onClick={ () => setClick(false) }
                            >
                                { item.title }
                            </Link>
                        </li>
                    );
                }) }
            </ul>
        </>
    );
}

export default Dropdown;