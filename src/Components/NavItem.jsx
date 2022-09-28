

import Style from '../Styles/NavItem.module.css';

const NavItem = ({value,onClick}) => {
    
    return (
        <li onClick={onClick} className={Style.NavItem}> {(value!=="")?value:"no value"}</li>
    )
}

export default NavItem;