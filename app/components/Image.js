import React, { PropTypes, Component } from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'

const w = Dimensions.get('window')
class ImageItem extends Component {

  render() {
    return (
      <View style={styles.image} >
        <Image style={[ { width: w.width / 2 - 4, height: w.width / 2} ]} source={{uri: this.props.image.image_url}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    margin: 2,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  }
})
export default ImageItem

