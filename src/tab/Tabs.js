import React from 'react';
import {
  View, Text,
  SafeAreaView
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';


//Pages

import Dashboard from './Dashboard';
import Practise from './Practise';
import Workshop from './Workshop';
import Getdata from './Getdata';
import Submitdata from './Submitdata';
import ImagePicker from './ImagePicker';
import Documentpicker from './Documentpicker';
import PropsData from './PropsData';
const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();
const PractiseStack = createStackNavigator();
const WorkshopStack = createStackNavigator();


const DashboardStackScreen = ({navigation}) => {
  return (
    <DashboardStack.Navigator initialRouteName='Dashboard'>
        <DashboardStack.Screen
          name="Dashboard"
          component={Dashboard}
        />
    </DashboardStack.Navigator>
  );
};
const PractiseStackScreen = ({navigation}) => {
    return (
      <PractiseStack.Navigator initialRouteName='Dashboard'>
        <PractiseStack.Screen
          name="Practise"
          component={Practise}
        />
      </PractiseStack.Navigator>
    );
};
const WorkshopStackScreen = ({navigation}) => {
  return (
    <WorkshopStack.Navigator initialRouteName='Dashboard'>
        <WorkshopStack.Screen
          name="Workshop"
          component={Workshop}
        />
         <WorkshopStack.Screen
          name="Documentpicker"
          component={Documentpicker}
        />
         <WorkshopStack.Screen
          name="Submitdata"
          component={Submitdata}
        />
         <WorkshopStack.Screen
          name="Getdata"
          component={Getdata}
        />
         <WorkshopStack.Screen
          name="ImagePicker"
          component={ImagePicker}
        />
        <WorkshopStack.Screen
          name="PropsData"
          component={PropsData}
        />
      </WorkshopStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        initialRouteName="Dashboard"
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
            name="Dashboard"
            component={DashboardStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontWeight:"bold", fontSize: 12}}>Dashboard</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontSize: 12}}>Dashboard</Text>
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Practise"
            component={PractiseStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontWeight:"bold", fontSize: 12}}>Practise</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontSize: 12}}>Practise</Text>
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Workshop"
            component={WorkshopStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontWeight:"bold", fontSize: 12}}>Workshop</Text>
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                      <Text style={{color:"#222", fontSize: 12}}>Workshop</Text>
                    </View>
                  ),
              })}
          />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;