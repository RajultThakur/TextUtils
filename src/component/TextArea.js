import React from 'react'

function TextArea (props) {
    const [text, setText] = React.useState("");
    const [copy, setCopy] = React.useState("Copy");
    const [clearBtn, setsetClearBtn] = React.useState("Clear");
    function Change (e) {
        setText(e.target.value);
    }
    function toUpperCase () {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.alerts("Converted to upperCase" , "success")
    }
    function lowerCase () {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.alerts("Converted to lowerCase" , "success")
    }
    function clear () {
        setText("");
        props.alerts("Clered", "success")
    }
    function copyHandel () {
        let copyText = document.getElementById("floatingTextarea2");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        setCopy("Copyed")
        setTimeout(() => {
            setCopy("Copy");
        }, 500)
        props.alerts("Text copyed successfull" , "success")
    }
    function spaceremover(){
      let spaceremove =   text.replace(/\s+/g, ' ').trim();
      setText(spaceremove);
      setTimeout(() => {
          props.alerts("Extra spaces removed successfull" , "success")
      },1000)
    }
    let light = ({
        backgroundColor: "white",
        color: "black",
    })
    let dark = ({
        backgroundColor: "black",
        color: "white",
    })

    return (
        <div >
            <div className={`container mycontainer text-${props.state ? `light` : `dark`}`} >
                <h1 className="heading">Enter your text for analysis</h1>
            </div>

            <div className="mb-3 container" >
                <textarea className="form-control" style={props.state ? dark : light} value={text} onChange={Change} placeholder="Start writing from hear. . . ." id="floatingTextarea2" row="19"></textarea>
            </div>

            <div className="container">
                <button className="btn btn-primary px-10 ma-10" onClick={toUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary px-10" onClick={lowerCase}>to Lowercase</button>
                <button className="btn btn-primary px-10" onClick={copyHandel}>{copy}</button>
                <button className="btn btn-primary px-10" onClick={spaceremover}>remove Extra space</button>
                <button className="btn btn-danger px-10" onClick={clear}>{clearBtn}</button>
            </div>

            <div className="container my-2" style={props.state ? dark : light}>
                <h2>Your summary</h2>
                <div style={props.state ? dark : light}>
                <p>Charector Count : {text.trim().length} Total Word Count : {text.length>0 ? text.trim().split(" ").length : 0}</p>
                    <p>Avrege word Length : {(text.length / text.trim().split(" ").length).toFixed(1)}</p>
                    <p>Time taken to read: {(0.008 * text.split(" ").length).toFixed(2)} Minutes</p>
                    {text !== "" ? <h3>Preview</h3> : ""}
                    <div className="container" style={props.state ? dark : light}>
                        <p style={props.state ? dark : light} className="preview">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextArea
