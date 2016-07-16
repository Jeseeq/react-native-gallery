import {StyleSheet, View, ListView, Text, TouchableOpacity} from 'react-native'
import React, {Component} from 'react' 

import ImageItem from '../components/Image'
import Grid from '../components/Grid'


const API = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF'


class InfiniteScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      isLoadingTail: false,
      loaded: false,
      dataSource: null
    }
    this.renderItem = this.renderItem.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
  }
  componentDidMount () {
    this.fetchData(API, this.state.page)
    this._data = []
    
  }
  fetchData (url, page) {
    fetch(`${url}&page=${page}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
         loaded: true,
         dataSource: this.getDataSource(responseData.photos)
         })
      })
      .done()
  }
  onEndReached () {
        console.log('onEndReached', this.state.isLoadingTail);
        if (this.state.isLoadingTail) {
            // We're already fetching
            return;
        }
        this.setState({
            isLoadingTail: true
        })

        let page = this.state.page + 1
        this.fetchData(API, page)
        this.setState({
            isLoadingTail: false,
            page: page
        })

 }
  getDataSource(items) {
     this._data = this._data.concat(items)
     return this._data
  }

  renderItem (item, index) {
     return (
       <TouchableOpacity key={index} onPress={(e)=> this.navigateToImagePage(item)}>
         <ImageItem image={item} />
       </TouchableOpacity>
     )
  }
  renderLoadingView() {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>
          Loading...
        </Text>
      </View>
    )
  }
  navigateToImagePage(item) {
    this.props.navigator.push({
      ident: 'ImagePage',
      item: item
    }) 
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <Grid
        items={this.state.dataSource}
        itemsPerRow={2}
        renderItem={this.renderItem}
        onEndReached={this.onEndReached}
      />
    )
  }
}


export default InfiniteScreen
