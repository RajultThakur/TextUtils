import React from 'react'
function firstUpperCase(word){
    let text = word.toLowerCase();
    return text.charAt(0).toUpperCase()+text.slice(1);
}

function Alert (props) {
    return (
        props.alerts && <div className={`alert alert-${props.alerts.type}`} role="alert">
  <strong>{firstUpperCase(props.alerts.type)}! {props.alerts.message}</strong>
</div>
    )
}

export default Alert
