import React, { Component } from 'react';
import { Drawer } from 'native-base';
import {DrawerSideBar} from "./drawerSideBar";

export default class DrawerExample extends Component {
  render() {

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerSideBar/>}
        onClose={() => this.closeDrawer()} >
      // Main View
      </Drawer>
    );

  }
}