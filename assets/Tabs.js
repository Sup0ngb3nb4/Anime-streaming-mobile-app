import React from 'react';
import {
  View, Text,
  SafeAreaView
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';


//Pages
import Manhwa from './page2';
import Manga from './page3';


const Tab = createBottomTabNavigator();

const ManhwaStack = createStackNavigator();
const MangaStack = createStackNavigator();


const ManhwaStackScreen = ({navigation}) => {
  return (
    <ManhwaStack.Navigator initialRouteName='Manhwa'>
        <ManhwaStack.Screen
          name="Manhwa"
          component={Manhwa}
        />
    </ManhwaStack.Navigator>
  );
};
const MangaStackScreen = ({navigation}) => {
    return (
      <MangaStack.Navigator initialRouteName='Manga'>
        <MangaStack.Screen
          name="Manga"
          component={Manga}
        />
      </MangaStack.Navigator>
    );
};

const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        initialRouteName="Manhwa"
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
            elevation: 5,
            height: 60,
            backgroundColor: '#fff',
          },
        }}>
          <Tab.Screen
            name="Manhwa"
            component={ManhwaStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontWeight:"bold", fontSize: 12}}>Manhwa</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontSize: 12}}>Manhwa</Text>
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Manga"
            component={MangaStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontWeight:"bold", fontSize: 12}}>Manga</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontSize: 12}}>Manga</Text>
                    </View>
                  ),
              })}
          />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;