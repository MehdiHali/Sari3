import { React, useState } from "react";
import './App.css'
import { ReactDOM } from "react";
import { useEffect } from "react";
import Player from './Components/Player';
// import Header from "./Components/Header";
import Header from "./Components/Header";
import Units from "./utils/units";
import LeftNav from './Components/LeftNav';

function getSubUnits(){

    return [];
}

function App() {
    const subUnits = ["Grip","Words","Control","Sentences","Test"]
    const units_arr = Units.main;
    const [level,setLevel] = useState({unitNo:1,subUnitNo:1});
    const {unitNo,subUnitNo} = level;
    console.log("Units",units_arr[unitNo].subunits.Grip)
    let Unit = "Unit 1";
    let SubUnit = "Grip";


    
    let text = units_arr[unitNo].subunits[subUnits[subUnitNo]]
    let guide = units_arr[unitNo].guide;
    text= "this is some text"
    
    // let text = "this is some long text"+" this is some long text";
    // text = units.main[0].subunits.Grip;

    return (
        <div className="flex flex-col bg-gray-800 h-screen min-h-screen ">
            {/* <UnitNav Units={Units.main} setLevel={setLevel} /> */}
                <Header className="h-[10%]" Unit={Unit} SubUnit={SubUnit} />                     
            <main className="flex h-[90%]">
            <LeftNav units={units_arr} guide={guide} />
                <Player text = {text} guide={guide}  />
            </main>
        </div>
    )
}



export default App; 