import React from 'react';


const WizardBio = (props) => {
  if(!props.wizard) return null;


  function checkDOB(){
    if(!props.wizard.dateOfBirth){
      return "Unknown"
    }
    else{
      return props.wizard.dateOfBirth
    }
  }

  function checkAncestry(){
    if(!props.wizard.ancestry){
      return "Unknown"
    }
    else{
      return props.wizard.ancestry
    }
  }

  function checkHouse(){
    if(!props.wizard.house){
      return "Unknown"
    }
    else{
      return props.wizard.house
    }
  }

  return (
    <div id="wizard-bio">
      <img id="bio-img" alt={props.wizard.name} src={props.wizard.image}></img>
      <p id="bio-name"><b>Name:</b> {props.wizard.name}</p>
      <p id="bio-dob"><b>D.O.B:</b> {checkDOB()}</p>
      <p id="bio-house"><b>House:</b> {checkHouse()}</p>
      <p id="bio-ancestry"><b>Ancestry:</b> {checkAncestry()}</p>
    </div>
  )
}

export default WizardBio;
