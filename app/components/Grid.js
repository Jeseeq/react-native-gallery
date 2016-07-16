import React, {Component} from 'react'

import {
  View,
  StyleSheet,
  ListView,
} from 'react-native'

class CollectionView extends Component {
  constructor(props) {
    super(props)
    this.groupItems = this.groupItems.bind(this)
    this.renderGroup = this.renderGroup.bind(this)
  }
    groupItems (items, itemsPerRow) {
        var itemsGroups = []
        var group = []
        items.forEach((item) => {
          if (group.length === itemsPerRow) {
            itemsGroups.push(group)
            group = [item]
          } else {
            group.push(item)
          }
        })

        if (group.length > 0) {
          itemsGroups.push(group)
        }
        console.log(itemsGroups)
        return itemsGroups
    }
    renderGroup (group) {
      var items = group.map((item, index) => {
        return this.props.renderItem(item, index)
      })
      return (
        <View style={styles.group}>
          {items}
        </View>
      )
    }
    render () {
        var groups = this.groupItems(this.props.items, this.props.itemsPerRow)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        return (
          <ListView
            {...this.props}
            renderRow={this.renderGroup}
            dataSource={ds.cloneWithRows(groups)}
            onEndReached={this.props.onEndReached} />
        )
    }
}


var styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
})

export default CollectionView

