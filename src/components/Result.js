import React from 'react';
import PropTypes from 'prop-types'

export default function Result(props) {
    const myStyle = {
        backgroundColor: "rgb(226, 223, 223)",
    };

    if(props.theme === "dark" && !props.colTheme) {
        myStyle.backgroundColor = "rgb(52, 43, 43)";
        myStyle.border = "1px solid white";
    } else if(props.colTheme === "danger") {
        myStyle.backgroundColor = "rgb(232, 117, 117)";
        myStyle.border = "1px solid red";
    } else if(props.colTheme === "primary") {
        myStyle.backgroundColor = "rgb(110, 110, 249)";
        myStyle.border = "1px solid blue";
    } else if(props.colTheme === "success") {
        myStyle.backgroundColor = "rgb(100, 216, 100)";
        myStyle.border = "1px solid green";
        myStyle.color = "black";
    } else if(props.colTheme === "warning") {
        myStyle.backgroundColor = "rgb(226, 165, 52)";
        myStyle.border = "1px solid orange";
    }

    const copyText = () => {
        const resultText = document.getElementById("resultText").textContent;
        const textareaElement = document.createElement("textarea");
        document.body.appendChild(textareaElement);
        textareaElement.style.position = "absolute";
        textareaElement.style.display = "none";
        textareaElement.value = resultText;
        textareaElement.select();
        navigator.clipboard.writeText(textareaElement.value).then(() => {
            document.body.removeChild(textareaElement);
            props.setAlert("Copied to clipboard", "success");
        }).catch((error) => {
            props.setAlert("Something went wrong", "warning");
        });
    };

    if(props.content !== "")
        return (
            <>
            <h3>Here you can show the result below</h3>
            <div style={{textAlign: "right" }}>
                <button className={`btn btn-outline-${ props.btnColor } py-1 border-0`} onClick={ copyText }>Copy</button>
            </div>
            <div className='container my-1 result-section' style={ myStyle }>
                <p id='resultText'>{ props.content }</p>
            </div>
            </>
        );
    return (
        <>
        <h3>Here you can show the result below</h3>
        <div className='container my-2'> 
            <p>No input has been given!</p>
        </div>
        </>
    );
};

Result.propTypes = {
    content: PropTypes.string,
};

Result.defaultProps = {
    content: "",
};
