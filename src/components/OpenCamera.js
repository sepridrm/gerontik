import { Camera } from 'expo-camera';
import { Avatar } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { getSize } from '../utils/helpers';

export default class OpenCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null,
            hasPermission: null,
            type: Camera.Constants.Type.back,
        };
        this.onCapture = this.onCapture.bind(this)
    }

    async componentDidMount() {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    onCapture() {
        if (this.camera) {
            this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
        }
    }

    onPictureSaved = photo => {
        this.setState({
            foto: photo
        })
    }

    render() {
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <View style={{ flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ color: '#626262' }}>No access to camera</Text>
            </View>
        }
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'black' }}>
                <View style={{ flexGrow: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Camera style={{ width: getSize.widthScreen, height: getSize.widthScreen }} ratio="1:1" type={this.state.type} ref={(ref) => { this.camera = ref }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ padding: 5, marginRight: 15 }}
                            onPress={() => {
                                this.setState({
                                    type:
                                        this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                });
                            }}>
                            <Ionicons size={23} name="ios-camera-reverse" style={{ color: 'white' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 5, marginLeft: 15 }}
                            onPress={() => this.onCapture()}>
                            <View style={{ backgroundColor: 'red', borderRadius: 27, padding: 3 }}>
                                <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 25, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                    <Ionicons size={23} name="ios-camera" />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 5, marginLeft: 20 }}
                            onPress={() => this.state.foto ? [this.props.route.params.setFoto(this.state.foto), this.props.navigation.goBack()] : null}>
                            {this.state.foto === null ?
                                <Avatar source={require('../../assets/icon.png')} />
                                :
                                <Avatar source={{ uri: this.state.foto.uri }} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
