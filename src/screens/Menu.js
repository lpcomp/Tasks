import React, {Component} from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import commonStyles from '../commonStyles'
import AsyncStorage from '@react-native-community/async-storage'

import {Gravatar, GravatarApi} from 'react-native-gravatar';

export default class Menu extends Component{ 

    logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        this.props.navigation.navigate('Loading')
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.header} >
                    <Text style={styles.title} >Tasks</Text>                
                    <Gravatar options={{
                            email: this.props.navigation.getParam('email'),
                            secure: true
                        }}
                        style={styles.avatar} />
                    <View style={styles.userInfo}>
                        <View>
                            <Text style={styles.name} >{this.props.navigation.getParam('name')}</Text>
                            <Text style={styles.email} >{this.props.navigation.getParam('email')}</Text>
                        </View>
                        <TouchableOpacity onPress={this.logout} >
                            <View style={styles.logoutIcon} >
                                <Icon name="sign-out" size={30} color='#800' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {console.log(this.props)}
                <DrawerNavigatorItems {...this.props} />
            </ScrollView>
        )
    }
}
    
const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title: {
        backgroundColor: '#FFF',
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: 30,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10,
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 20,
        marginLeft: 10,
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoutIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
})