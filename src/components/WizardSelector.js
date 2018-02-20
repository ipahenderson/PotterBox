import React from 'react';

const WizardSelector = (props) => {

  function handleChange(e){
    props.onWizardSelected(e.target.value);
  }

  const options = props.wizards.map((wizard, index) => {
    return<option value={index} key={index}>{wizard.name}</option>
  });

  return (
    <select id='wizard-selector' onChange={handleChange} defaultValue='default'>
      <option disabled value='default'>Choose a character...</option>
      {options}
    </select>
  )

}

export default WizardSelector;
