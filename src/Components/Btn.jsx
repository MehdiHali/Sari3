
import BtnStyle from '../Styles/Btn.module.css';
import {BsArrowLeftShort} from 'react-icons/bs';

export function Btn ({label,Icon,round,roundFull,primary,secondary}){

    let Style = {
        padding: "6px",
        minWidth: "30px",
        width: "fit-content",
        display: "flex",
        gap: "6px",
        alignItems: "center",
        justifyContent:"center",
        borderRadius: round?"10px":roundFull?"15px":"0px",
        cursor: "pointer",
    };
    return(
        <div style={Style} className={primary?" primary":secondary?" secondary":"secondary"} type="button">{Icon?Icon:""}{label?label:""}</div>
    )
}
