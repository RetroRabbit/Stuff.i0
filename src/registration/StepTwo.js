import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './StepTwo.css'

class Register2 extends React.Component {
  constructor(props) {
    super(props);
    
  }
  state = {
    profilephoto: '',
    hasimg: false,
  }

  changeImg(e){
    console.log(e.target);
    console.log(e.target.files[0]);
    
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
          this.setState({profilephoto: event.target.result});
      };
      reader.readAsDataURL(e.target.files[0]);
  }

    this.setState({hasimg:true});
    
  }

  render() {
    return (
      <div className="background">
        <MuiThemeProvider>
          <div className="space">

        </div>
          <div className="rectangle">
          <div className="space">

          </div>
            <h2 className="step-two">Step Two</h2>
            <h2 className="profile-picture">PROFILE PICTURE</h2>
            <div className="oval">
              {
                  !this.state.hasimg ? 
                  <div className="oval-2">
                    
                  <div className="plus" >
                  <div className="line"></div>
                  <div className="line-copy"></div>
                </div>
                <input type="file" onChange={(e)=>{this.changeImg(e)}} style={inputimg}></input>
                
                </div>
                :
                <img src={this.state.profilephoto} className="oval-4" alt="Profile Photo"></img>
                }
             
            </div>
            <RaisedButton className="button" label="Next Step" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            <h6 className="skip-for-now">Skip for now</h6>
         </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

const inputimg ={
  opacity: 0,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%"
}



export default Register2;