import React from 'react';
import './Button.css';

const Button = props => {
  const isButtonDisabled = props.activeChannel === props.radioChannelId || props.status === 1;
  return (<input disabled={isButtonDisabled} className="Button" type="button" value="Button" onClick={() => { props.onClickHandler(props.radioChannelId) }} />)
}

export default Button;
