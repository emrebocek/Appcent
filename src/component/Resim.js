import React,{Component} from 'react';
import {Text,Image,View} from 'react-native';

export default class Resim extends Component{
    constructor(props){super(props);
    console.log(this.props.navigation.state.params.url);
    }
    render()
    {
        return (
<Image source={{uri:this.props.navigation.state.params.url}} style={{width:'100%',height:'100%'}} resizeMode={'contain'} />
        );
           
        
    }
}
