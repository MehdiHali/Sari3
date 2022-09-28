
import { BsListNested } from 'react-icons/bs';
import Style from '../Styles/Controller.module.css';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {Btn} from '../stories/Btn';
import {BsArrowCounterclockwise} from 'react-icons/bs';

export default function ({timer,state,handleRestart,}){


    let stateString = state.READY?"Ready":state.TYPING?"GO":state.ERROR?"Error":state.COMPLETED?"Completed":null;

    return (
        <div  className={Style.Controller+" secondary"}>
            <Btn roundFull Icon={<BsArrowLeftShort size={"50px"} />} primary  />
                <div  className={Style.controllerState}>
                <div style={{minWidth:"250px",flex:"1",height:"100%",backgroundColor: "black",padding:"1rem"}}>
                        <div>Timer</div>
                        <div className={Style.state}>{state?stateString:"state"}</div> 
                    </div>
                    <div>
                        <div>State</div>
                        <div className={Style.timer}>{timer?timer:"00:00"}</div>
                    </div>
                    <Btn Icon={<BsArrowCounterclockwise />} handleClick={handleRestart} />
                </div>
            <Btn roundFull Icon={<BsArrowRightShort />} primary  />
        </div>
    )
}