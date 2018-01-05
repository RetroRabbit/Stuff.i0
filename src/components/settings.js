
import React,{ Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import HeaderNav from './headerNav';

import '../css/index.css'

const styles = {
  gridList: {
    width: '100%',
    overflowX: 'auto',
  },
};


class settings extends Component{
  constructor(prop){
    super(prop);
  }

  state = {
      props:'',
      logged: false,
      user:{
        img:"https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.idyllwildarts.org%2Fwp-content%2Fuploads%2F2016%2F09%2Fblank-profile-picture.jpg&f=1",
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
              cellHeight={70}
              style={styles.gridList}>
              <GridTile  className="text-center" cols={1} rows={4}>
                <Avatar size="60" className="oval" src={this.state.user.img} />
              </GridTile>

                <GridTile  className="text-center" cols={1} rows={1}>
                  <label className="addie-hogan-addiehog">
                    {this.state.user.surname} {this.state.user.name}
                  </label>
                  <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}>
                    <EditorModeEdit />
                  </IconButton>

                </GridTile>

                <GridTile className="text-center" cols={1} rows={1}>
                  <label className="addie-hogan-addiehog">
                    {this.state.user.email}
                  </label>
                  <IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}>
                    <EditorModeEdit />
                  </IconButton>
                </GridTile>

                <GridTile  className="text-center" cols={1} rows={2}>
                  <RaisedButton label="Done" secondary={true}></RaisedButton>
                </GridTile>
            </GridList>
         </div>
      );
    }
}

export default settings;
