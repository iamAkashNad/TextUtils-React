import React, { useState } from "react";
import PropTypes from 'prop-types';
import Result from "./Result";


export default function TextForm(props) {
    const [ text, updateText ] = useState("");
    const [ result, updateResult ] = useState("");

    const convertToUpperCase = () => {
        if(result.trim() === "") {
            props.setAlert("Before formatting the input text please enter some", "warning");
            return;
        }
        let content = result;
        updateResult(content.toUpperCase());
        props.setAlert("Changing all characters of the text to upper case is done.", "success");
    };

    const convertToLowerCase = () => {
        if(result.trim() === "") {
            props.setAlert("Before formatting the input text please enter some", "warning");
            return;
        }
        let content = result;
        updateResult(content.toLowerCase());
        props.setAlert("Changing all characters of the text to lower case is done.", "success");
    };

    const romoveExtraSpaces = () => {
        if(result.trim() === "") {
            props.setAlert("Before formatting the input text please enter some", "warning");
            return;
        }
        let content = result.split(" ");
        let finalizeStr = "", space = "";
        for(const word of content) {
            if(word === "." || word === "?" || word === "," || word === "!") {
                finalizeStr += word;
                continue;
            }
            if(word !== "") {
                finalizeStr += (space + word);
                space = " ";
            }
        }
        updateResult(finalizeStr.trim());
        props.setAlert("Removing all extra spaces from the input text is done.", "success");
    };

    const reverseString = () => {
        if(result.trim() === "") {
            props.setAlert("Before formatting the input text please enter some", "warning");
            return;
        }
        let content = "";
        for(let i=result.length - 1 ;i >= 0 ;i--)
            content += result.charAt(i);
        updateResult(content);
        props.setAlert("Reversing the input text is done.", "success");
    };

    const clearText = () => {
        if(result.trim() === "") {
            props.setAlert("Nothing is entered in the input", "warning");
            return;
        }
        updateText("");
        updateResult("");
        props.setAlert("Input text has been cleared.", "success");
    };

    const handleChanges = (event) => {
        updateText(event.target.value);
        updateResult(event.target.value);
    };

    const countNonSpaceChars = () => {
        let count = 0;
        for(let i=0 ;i<text.length ;i++)
            if(text.charAt(i) !== ' ')
                count++;
        return count;
    };

    const countWords = () => {
        let words = 0;
        const arr = text.split(" ");
        for(const word of arr)
            if(word !== "")
                words++;
        return words;
    };


    const myStyle = {
        color: "black",
        backgroundColor: "white",
    };

    if(props.theme === "dark" && !props.colTheme) {
        myStyle.backgroundColor = "rgb(50, 44, 44)";
        myStyle.color = "white";
    } else if(props.colTheme === "danger") {
        myStyle.backgroundColor = "rgb(232, 117, 117)";
        myStyle.color = "white";
    } else if(props.colTheme === "primary") {
        myStyle.backgroundColor = "rgb(110, 110, 249)";
        myStyle.color = "white";
    } else if(props.colTheme === "success") {
        myStyle.backgroundColor = "rgb(100, 216, 100)";
        myStyle.color = "black";
    } else if(props.colTheme === "warning") {
        myStyle.backgroundColor = "rgb(226, 165, 52)";
        myStyle.color = "white";
    }

    return (
    <>
    <div className="container my-3">
        <h2>{ props.heading }</h2>
        <div className="mb-3">
            <label htmlFor="enterText" className="form-label">
            Enter Your Text
            </label>
            <textarea className="form-control" style={ myStyle } value={ text } onChange={ handleChanges } id="enterText" rows={ props.rows }></textarea>
        </div>
        <button className={`btn btn-outline-${ props.btnColor } my-2`} onClick={ clearText }>Clear Text</button>
        <button className={`btn btn-${ props.btnColor } mx-2 my-2`} onClick={ convertToUpperCase }>Convert To Uppercase</button>
        <button className={`btn btn-${ props.btnColor } my-2`} onClick={ convertToLowerCase }>Convert To Lowercase</button>
        <button className={`btn btn-${ props.btnColor } mx-2 my-2`} onClick={ romoveExtraSpaces }>Remove Extra Spaces</button>
        <button className={`btn btn-${ props.btnColor } my-2`} onClick={ reverseString }>Reverse</button>
    </div>
    <div className="container my-3">
        <h3>Your input text summery</h3>
        <p>the input text has { countWords() } words & { text.length } characters({ countNonSpaceChars() } non-space characters).</p>
    </div>
    <div className="container my-5">
        <Result content={ result } theme={ props.theme } colTheme={ props.colTheme } />
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
};


TextForm.defaultProps = {
    heading: "Enter Some Heading...",
    rows: 4,
};
