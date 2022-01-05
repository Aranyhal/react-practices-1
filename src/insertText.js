import React from 'react'

const handleClickEvent = (event) => {
    console.log(event);
    document.getElementById("text").className -= "hidden";
};

function insertText(props) {
    const {text, text2} = props;
    console.log(text);
    console.log(text2)
    return (
        <div>
            <button onClick={handleClickEvent}>{props.text}</button>
            <h2 id="text" className="hidden">Text here</h2>
        </div>
    )
}

export default insertText;