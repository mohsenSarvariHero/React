import {useState} from "react";
import {User} from './components/1.js';
import {Job} from './components/1.js';
import {Person} from './components/1.js';
import {Course} from './components/1.js';
import './App.css';



function App() {
  //const name = <h1>mohsen</h1>;
  //const lastName = <h1>sarvari</h1>
  //const age = <h1>24</h1>
  //const mohsen =
  //  <div>
  //     <h1>mohsen</h1>
  //     <h2>sarvari</h2>
  //     <h3>24 years old</h3>
  // </div>
  const allow = true;
  const whites = 80;
  const lists = ['mohsen' , 'mobin', 'matin' , 'mother' , 'father']
  const obje1 = [
    {name : 'mohsen', age : 24} , 
    {name : 'matin', age : 20},
    {name : 'mobin', age : 10} 
    ]

  const classes =[
    {name:"html" , finished : true},
    {name:"css" , finished : false},
    {name:"js" , finished : true},
    {name:"git" , finished : false},
    {name:"react" , finished : true},
    {name:"bootstrap" , finished : true},
    {name:"vue" , finished : false},
    {name:"angular" , finished : true},
    ]


  const [age , setAge] = useState(0)
  const [insertValue , setInsertValue] = useState("")
  const [textShow ,setTextShow ] = useState(true)

  const show = ()=>{
    setTextShow(!textShow)
  }
  const increaseAge = ()=>{
    setAge(age+1)
  }
  const decreaseAge = ()=>{
    {age > 0 && setAge(age-1)  }
  }
  const resetAge = ()=>{
    setAge(0)
  }
  const handle = (e)=>{
    //console.log(e.target.value)
    setInsertValue(e.target.value) 
  }
  const [titleCite , setTitlecite] = useState("welcome to your cite")
  const colorCH = (e)=>{
    document.getElementById("titleFirst").style.color = "red";
  }

  const [colorF , setColorF] = useState("green")
  const changeColorH = ()=>{
    setColorF(colorF=="blue" ? "green" : "blue")
  }
  const [colorInput , setColorinput] = useState("blue")
  const colorSelect = (e)=>{
    setColorinput(e.target.value)
  }
  if(allow){
  return (
    <div className="App">
      <h1 style ={{color : colorF}}>In The Name Of God</h1>
      <button onClick={changeColorH}>change color</button>
     <nav>
      <ul style={{listStyleType : "none", display : "flex" , justifyContent : "space-around" , backgroundColor : "green", padding:"10px" }}>
        <li><a href="#" style = {{textDecoration : "none" , color : "white" }}>Home</a></li>
        <li><a href="#" style = {{textDecoration : "none" , color : "white"}}>Blog</a></li>
        <li><a href="#" style = {{textDecoration : "none" , color : "white"}}>About</a></li>
        <li><a href="#" style = {{textDecoration : "none" , color : "white"}}>Contact</a></li>
       
      </ul>

     </nav >
     <h1 id = "titleFirst">{titleCite}</h1>
     <section>
      <img src={'../public/logo192.png'} />
     </section>
     <User name = "mohsen" lastName = " sarvari" age= {24} />
     <User name = "matin" lastName = " sarvari" age= {20} />
     <User name = "mobin" lastName = " sarvari" age= {10} />

     <Job salary={24} position = "cheif" company = "google" />
     <Job salary={223} position = "employ" company = "microsoft" />
     <Job salary={53.52} position = "cheif" company = "facebook" />

     <section>
      <div>
        <form>
          <label style={{color : "red" , textShadow : "2px 2px 5px blue"}}>firstName : </label>
          <input type="text" />
          <label className="colors" style = {{marginLeft : "10px"}}>lastName : </label>
          <input type="text" />
          <br/>
          <br/>
          <button  style={{cursor: "pointer"}} onClick={colorCH}> change color :  </button>


        </form>

      </div>

     </section>
     {whites > 50 ? <h2>perfect</h2> : <h2>need to more</h2>}
     { whites > 50 && <h2>excellent you know that</h2>}
     <h2 className ={ whites > 50 ? "accept" : "reject" }>you now see your result</h2>
     <button style={{fontSize : whites>50 ? "20px" : "40px"}}>click </button>
      <ul style = {{padding:"0px 650px"}}>
        {lists.map((value , index)=>{
          return <li key = {index}>{value}</li>
        })}
      </ul>

      <ul style = {{padding:"0px 620px"}}>
        {obje1.map((value , index)=>{
          return <li key = {index}>{value.name} : {value.age}</li>
        })}
      </ul>
      <ul style = {{padding:"0px 620px"}}>
        {obje1.map((value , index)=>{
          return <Person name = {value.name}  age = {value.age}  index = {index}/>
        })}
      </ul>

      <ul style = {{padding:"0px 620px"}}>
        {classes.map((value , index) =>{
        if(value.finished){
          return (
            <Course name = {value.name} />
            
          )
          // return value.finished && <li key = {index}>{value.name}</li>
          }
         })}
      </ul>

         <section>
          <button onClick = {increaseAge}>"increase age"</button>
          <button onClick = {decreaseAge }>"decrease age"</button>
          <button onClick = {resetAge }>"reset age"</button>
          <h2>{age}</h2>
          <input type = "text" onChange={handle}></input>
          <h2>{insertValue}</h2>
         </section>

         <section>
          <div>
            <button onClick = {show}>HIde/showe</button>
            {textShow && <h2>hello mohsen</h2>}
          </div>

         </section>
         <section>
             <h2 style = {{color : colorInput}}>what ever do you want that is </h2>
             <input type="color" onChange={colorSelect}></input>
             <p>{colorInput}</p>
             {/* <input type="text" ></input>
             <button tupe ="submit">send</button> */}
         </section>


    </div>
  );}
  return (
    <div>
      <h1 style = {{textAlign : "center" , color : "red" , marginTop : "100px" ,paddingTop : "150px",textShadow:"2px 2px 3px yellow", backgroundColor : "black",border:"2px solid green",height : "220px"}}>your not access</h1>
    </div>
  )
}


//component 

// document.querySelector("button").addEventListener("click",()=>{
//   document.querySelector("input").color = "green"
// })


export default App;
