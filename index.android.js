/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native'
import GridPage from './app/views/GridPage'
import ImagePage from './app/views/ImagePage'

class gallery extends Component {

  renderScene(route, navigator) {
    var globalNavigatorProps = {navigator}


    switch (route.ident) {
     case 'GridPage':
        return (
          <GridPage {...globalNavigatorProps} />
      )

      case 'ImagePage':
        return (
          <ImagePage {...route.item} {...globalNavigatorProps} />
      )
      default:
        return (
          <GridPage {...globalNavigatorProps}/>
      )
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ident: 'GridPage'}}
        ref='appNavigator'
        renderScene={this.renderScene} />
     )
  }
}

AppRegistry.registerComponent('gallery', () => gallery)
