import React from 'react';
import WizardSelector from '../components/WizardSelector'
import WizardBio from '../components/WizardBio'


class PotterBox extends React.Component {

constructor(props){
  super(props);
  this.state = {
    wizards: [],
    currentWizard: null
  }
  this.handleWizarsSelected = this.handleWizarsSelected.bind(this);
}

handleWizarsSelected(index){
  const selectedWizard = this.state.wizards[index];
  this.setState({currentWizard: selectedWizard})
}

componentDidMount(){
  const url = 'http://hp-api.herokuapp.com/api/characters';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () =>{
    if(xhr.status !== 200) return;
    var jsonString = xhr.responseText;
    var data = JSON.parse(jsonString);
    console.log(data);
    this.setState({
      wizards: data
    });
  })

  xhr.send();

}

render(){
  return(
    <div id="potter-box">
      <img alt="hp-logo" id="logo" src="http://www.pngmart.com/files/3/Harry-Potter-Logo-PNG-Photos.png"></img>
      {/* <HouseSelector /> */}
      <WizardSelector wizards={this.state.wizards} onWizardSelected={this.handleWizarsSelected}/>
      <WizardBio wizard = {this.state.currentWizard}/>
    </div>
  )
}









}

export default PotterBox;
