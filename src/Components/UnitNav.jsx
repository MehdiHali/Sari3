
import { useEffect } from 'react';
import Style from '../Styles/UnitNav.module.css';
import NavItem from './NavItem.jsx';




function UnitNav({Units,setLevel}) {


    return (
        <nav className={Style.unitNav}>
            <h1 className={Style.logo}>MadTyper</h1>
                <select name="" id="">
            {
                    Units.map(
                        (Unit,i) => <option 
                        value={"unit "+(i+1)} 
                        onClick={
                            ()=>{
                            setLevel({unitNo:i,subUnitNo:1});
                            }
                        } 
                        key={i}>
                            {"unit "+(i+1)}
                        </option>
                    )
            }
                </select>
        </nav>
    )
}

export default UnitNav;