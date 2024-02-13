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

import manhwa1 from './src/manhwa1'
import manhwa2 from './src/manhwa2'
import manhwa3 from './src/manhwa3'
import manhwa4 from './src/manhwa4'
import manhwa5 from './src/manhwa5'
import manhwa6 from './src/manhwa6'
import manga1 from './src/manga1'
import manga2 from './src/manga2'
import manga3 from './src/manga3'
import manga4 from './src/manga4'
import manga5 from './src/manga5'
import manga6 from './src/manga6'
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
         <ManhwaStack.Screen
          name="God of Highschool"
          component={manhwa1}
        />
         <ManhwaStack.Screen
          name="Omniscient Reader"
          component={manhwa2}
        />
         <ManhwaStack.Screen
          name="The Dark Lord's Confession"
          component={manhwa3}
        />
         <ManhwaStack.Screen
          name="Teenage Mercenary"
          component={manhwa4}
        />
         <ManhwaStack.Screen
          name="If Ai Ruled The World"
          component={manhwa5}
        />
        <ManhwaStack.Screen
          name="The Academy's Undercover Professor"
          component={manhwa6}
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
        <MangaStack.Screen
          name="Code Geass"
          component={manga1}
        />
        <MangaStack.Screen
          name="Demon Slayer"
          component={manga2}
        />
        <MangaStack.Screen
          name="Noblesse"
          component={manga3}
        />
        <MangaStack.Screen
          name="Classroom Of The Elite"
          component={manga4}
        />
        <MangaStack.Screen
          name="The Irregular At Magic High School"
          component={manga5}
        />
        <MangaStack.Screen
          name="The Saint's Magic Power Is Omnipotent"
          component={manga6}
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
            backgroundColor: '#19a89b',
          },
        }}>
          <Tab.Screen
            name="Manhwa"
            component={ManhwaStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"white", fontWeight:"bold", fontSize: 14}}>Manhwa</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"white", fontSize: 12}}>Manhwa</Text>
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
                      <Text style={{color:"white", fontWeight:"bold", fontSize: 14}}>Manga</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"white", fontSize: 12}}>Manga</Text>
                    </View>
                  ),
              })}
          />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;