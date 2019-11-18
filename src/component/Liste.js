import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ListView,FlatList,TouchableOpacity} from 'react-native';
import Resim from './Resim';
import axios from 'axios';
import InfiniteScroll from 'react-native-infinite-scroll';

export default class Liste extends Component{
state = {data : [],page:1};
getData=async()=>
{
    axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=47d4c895a65f0d872490845f771d3c0b&extras=url_m&per_page=20&page="+this.state.page+"&format=json&nojsoncallback=1")
    .then(response => this.setState({data :this.state.data.concat(response.data.photos.photo)}));
}
     componentWillMount()
     {
         
        
         
     }
    componentDidMount()
    {
        this.getData()
       
    }
    renderData()
    {
    return this.state.data.map(responseData =><Detay data={responseData}></Detay>);
    }
    renderRow = ({item}) => {
        return (
            <View>
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Resim',{url:item.url_m})}}>
     <Image
    style={{width:item.width_m,height:item.height_m}}
    source={{uri:item.url_m}} />
    </TouchableOpacity>
        </View>
        )
    }
   
    handleLoadMore=()=>
    {
this.setState(
    {page:this.state.page+1},
    this.getData
)
    }
    render()
    {
         return (
           <FlatList 
           
           data={this.state.data}
           renderItem={this.renderRow}
           keyExtractor={(item,index) => index.toString()}
           onEndReached={this.handleLoadMore}
           
          
           />
             );

    }
    
    
}

