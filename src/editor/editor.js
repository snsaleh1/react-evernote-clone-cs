  
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class EditorComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>This is the editor</div>
        );
    }
}

export default withStyles(styles)(EditorComponent);