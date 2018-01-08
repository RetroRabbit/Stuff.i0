
import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import ActionDone from 'material-ui/svg-icons/action/done';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import HeaderNav from './headerNav';

import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
import '../css/index.css'

const styles = {
  gridList: {
    width: '100%',
    overflowX: 'auto',
  },
};

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class settings extends Component{

  saveChanges(){
    alert('saving changes');
  }


  state = {
    editingEmail:false,
    editingNames:false,
      props:'',
      logged: false,
      user:{
        img:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-MjluFiP9tPk%2FUkInFfUONuI%2FAAAAAAAABNg%2FGTBZ2kxMKvU%2Fs1600%2FFacebook-Anonymous.jpg&f=1",
        surname:"Hogan",
        name:"Addie",
        email:"Hogan.Addie@gmail.com"
      }
    };

    render() {
      return (
          <div>
            <HeaderNav />
            <GridList
              cols={1}
              cellHeight={80}
              style={styles.gridList}>
              <GridTile  className="text-center" cols={1} rows={4}>
                 <Paper className="oval text-center" size="50" zDepth={4} circle={true}>
                   <Avatar size="60" className="oval" src={this.state.user.img} />
                 </Paper>
              </GridTile>

                <GridTile  className="text-center" cols={1} rows={1}>
                  <div>
                    {
                      this.state.editingNames ?
                      <div>
                        <TextField onChange={(e) => {
                              var newSelected = this.state.user;
                              newSelected.surname = e.target.value.split(' ')[0]
                              newSelected.name = e.target.value.split(' ')[1]
                              this.setState({
                               user:newSelected})
                          }} hintText="Surname Name"/>
                          <IconButton
                            onClick={() => { this.setState({editingNames : false}) }}
                            iconStyle={styles.mediumIcon}
                            style={styles.medium}>
                            <ActionDone />
                          </IconButton>
                      </div>
                      :
                      <div>
                        <label className="addie-hogan-addiehog">
                          {this.state.user.surname} {this.state.user.name}
                        </label>
                        <IconButton
                          onClick={() => { this.setState({editingNames : true}) }}
                              iconStyle={styles.mediumIcon}
                          style={styles.medium}>
                          <EditorModeEdit />
                        </IconButton>
                      </div>
                    }
                  </div>

                </GridTile>

                <GridTile className="text-center" cols={1} rows={1}>
                  <div>
                    {
                      this.state.editingEmail ?
                      <div>
                        <TextField onChange={(e) => {
                              var newSelected = this.state.user;
                              newSelected.email = e.target.value
                              this.setState({
                               user:newSelected})
                          }} hintText="Email Address"/>
                          <IconButton
                            onClick={() => { this.setState({editingEmail : false}) }}
                            iconStyle={styles.mediumIcon}
                            style={styles.medium}>
                            <ActionDone />
                          </IconButton>
                      </div>
                      :
                      <div>
                        <label className="addie-hogan-addiehog">
                          {this.state.user.email}
                        </label>
                        <IconButton
                          onClick={() => { this.setState({editingEmail : true}) }}
                          iconStyle={styles.mediumIcon}
                          style={styles.medium}>
                          <EditorModeEdit />
                        </IconButton>
                      </div>
                    }
                  </div>
                </GridTile>

                <GridTile  className="text-center" cols={1} rows={2}>
                  <RaisedButton onClick={ ()=> this.saveChanges() } label="Done" secondary={true}></RaisedButton>
                </GridTile>
            </GridList>
         </div>
      );
    }
}

export default settings;
