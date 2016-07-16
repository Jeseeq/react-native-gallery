import React, { PropTypes, Component } from 'react'
import {Text, Image, View, StyleSheet} from 'react-native'

class ImagePage extends Component {

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.imageContainer}>
         <Image style={styles.image} source={{uri: this.props.image_url}}/>
        </View>
        <Text style={styles.text}>{this.props.name} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 14
  }
})
export default ImagePage

