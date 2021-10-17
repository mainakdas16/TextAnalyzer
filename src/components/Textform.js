import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");

    function changetoUppercase() {
        console.log("Uppercase button was clicked");
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Succes");
    }

    const changeHandler = (event) => {
        console.log("Text is being changed");
        setText(event.target.value);
    }

    const changetoLowercase = () => {
        console.log("The text is being changed to lowerCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerrcase", "Succes");
    }

    const clearText = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text is Cleared", "Succes");
    }

    const countWords = () => {
        let count = 0;

        let flag = "out";
        for(let i = 0; i < text.length; i++) {
            if (text[i] === ' ' || text[i] === '\n' || text[i] === '\t') {
			    flag = "out";
            }   

            else if(flag === "out") {
                flag = "in";
                count++;
            }
        }

        return count;
    }

    const removeSpaces = () => {
        let originalText = text;
        let removedSpacesText = originalText.split(" ").join("");

        setText(removedSpacesText);
        props.showAlert("Spaces Removed", "Succes");
    }

    const capitalizeTheFirstLetterOfEachWord = () => {
        let separateWord = text.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
           separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
           separateWord[i].substring(1);
        }
        let newText = separateWord.join(' ');

        setText(newText);
        props.showAlert("Capitalized First Letter", "Succes");
    }

    const copyText = () => {
        let copyText = document.getElementById("input-textArea");
        copyText.select();
        copyText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied", "Succes");
    }

    return (
        <>
            <div className="mb-5" style={{color : props.mode === "light" ? "black": "white"}}>
                <label htmlFor="input-textArea" className="form-label"> 
                   <h2>
                        <b> {props.heading} </b>
                   </h2>
                </label>
                <textarea className="form-control" id="input-textArea" rows="6" value={text} onChange={changeHandler} style={{backgroundColor : props.mode === "dark" ? "#050210": "white", color : props.mode === "light" ? "black": "white"}}></textarea>

                <button type="button" className="btn btn-outline-primary my-2" id='uppercase-btn' onClick={changetoUppercase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-secondary my-2 mx-1" id='lowercase-btn'onClick={changetoLowercase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-outline-success" onClick={clearText}>Clear Text</button>
                 <button type="button" className="btn btn-outline-danger my-2 mx-1" onClick={removeSpaces}>Remove Spaces</button>
                <button type="button" className="btn btn-outline-warning" onClick={capitalizeTheFirstLetterOfEachWord}>Capitalize First Letter</button>
                <button type="button" className="btn btn-outline-info my-2 mx-1" onClick={copyText}>Copy Text</button>
                {/* <button type="button" className="btn btn-outline-light">Light</button>
                <button type="button" className="btn btn-outline-dark">Dark</button> */}
            </div>

            <div className="container" style={{color : props.mode === "light" ? "black": "white"}}>
                <h2>Text Summary</h2>
                <p>
                    <i> Your text contains <b> {countWords()} words</b> and <b>{text.length} characters</b></i>
                </p>
            </div>
        </>
    )
}