import React ,{useState}from "react";


export default function TextFrom(props) {

  const clickOnChange = (event) => {
    setText(event.target.value);
  };

  const clickUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert to Upper Case","success")
  };

  const clickLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Convert to Lower Case","success")
  };

  const clickClCase = ()=>{
    setText("")
    props.showAlert("Clear Text","success")
  }

  const clickCopCase = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy into the clipborad","success")
  
  }

  const handelExtraSpace = ()=>{
    var text = document.getElementById("mybox")
    var text = text.value.replace(/\s+/g, ' ');
    setText(text);
    props.showAlert("Removes Extra Spaces","success")

  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3"style={{color : props.mode === 'dark'?'white':'#042743'}} >
        {/* <h1 className="mb-4">{props.heading}</h1> */}
        <div 
  className="container"
  style={{
    backgroundColor: props.mode === 'dark' ? '#2c3e50' : '#f0f0f0',  // Dark mode vs light mode background
    color: props.mode === 'dark' ? 'white' : '#2c3e50',  // Text color
    padding: '10px'
  }}>
  <h1 
    style={{
      fontFamily: 'Georgia, serif', 
      fontSize: '3rem', 
      letterSpacing: '2px',
      color: props.mode === 'dark' ? 'white' : '#2c3e50'  // Text color
    }}>
    {props.heading}
  </h1>
</div>




        <textarea
          className="form-control"
          value={text}
          onChange={clickOnChange}
          id="mybox"
          style={{backgroundColor : props.mode === 'dark'?'gray':'white',color : props.mode === 'dark'?'white':'#042743' }}
      
          rows="8"
        ></textarea>

        <button disabled={text.length===0} className="btn btn-primary my-2 mx-3" onClick={clickUpCase}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={clickLoCase}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 " onClick={clickClCase}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={clickCopCase}>
          Text Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="contanier my-3" style={{color : props.mode === 'dark'?'white':'#042743'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{ return ele.length!==0}).length}Words and {text.length}Charaters</p>
        <p>{0.008 * text.split(" ").filter((ele)=>{ return ele.length!==0}).length} reading per Mins</p>

        <h3>PreView</h3>
        <p>{text.length >0 ? text : 'Enter the text on above textarea for preview'}</p> 
      </div>
    </>
  );
}
