import {useState , useContext} from "react"
import {ChangeHome} from "./ChangeHome"
import { profileContext } from "./Home"

export const First = (props)=>{
    const [header , setHeader]  = useState("IN the name of god")
    const [colorH , setColorH] = useState("green")
    const [textColor , setTextColor] = useState("white")
    const [textH , setTextH] = useState(true)
    const [colorB , setColorB] = useState(true)
    const [textC , setTextC] = useState(true)
    const {homeN} = useContext(profileContext)

    const headerValue = (e)=>{
        setHeader(e.target.value)
    }
    const colorHeader = (e)=>{
        setColorH(e.target.value)
    }
    const textcHeader = (e)=>{
        setTextColor(e.target.value)
    }
    const textHeader = ()=>{
        setTextH(!textH)
    }
    const colorBack = ()=>{
        setColorB(!colorB)
    }
    const colorT = ()=>{
        setTextC(!textC)
    }
    return(
        <div>
            <section>
                <h1 style = {{backgroundColor : colorH , color: textColor , padding : "15px"}}>{header}</h1>
                
                <form style={{display : "flex", justifyContent : "space-around",}}>
                    <section>
                        <label>change header : </label>
                        <input type="text" onChange={headerValue}/>
                        { textH && <p> {header} </p>}
                        <button onClick={textHeader}>{textH == true ? "Hide" : "Show"}</button>
                    </section>
                    <section>
                        <label>change background color : </label>
                        <input type="text" onChange={colorHeader}/>
                        { colorB && <p>{colorH}</p>}
                        <button onClick={colorBack}>{colorB == true ? "Hide" : "Show"}</button>
                    </section>
                    <section>
                        <label>change text color : </label>
                        <input type="text" onChange={textcHeader}/>
                        { textC && <p>{textColor}</p> }
                        <button onClick={colorT}>{textC == true ? "Hide" : "Show"}</button>
                    </section>
                    
                   
                </form>
                 <h2>{homeN}</h2>
                    <ChangeHome />
                <br />
            </section>
        </div>
    )
}