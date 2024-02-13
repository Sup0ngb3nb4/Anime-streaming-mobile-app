
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import Tabs from './Tabs.js';
import Anime from './page0';
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';
import Pagea from './src/pagea';
import Pageb from './src/pageb';
import Pagec from './src/pagec';
import Paged from './src/paged';
import Pagee from './src/pagee';
import Pagef from './src/pagef';
import Anime1 from './src/anime1';
import Anime2 from './src/anime2';
import Anime3 from './src/anime3';
import Anime4 from './src/anime4';
import Anime5 from './src/anime5';
import Anime6 from './src/anime6';

const appStack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <NavigationContainer>
        <appStack.Navigator initialRouteName='ARISA'>
          <appStack.Screen name="ARISA" component={page1}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#05857a',
                elevation: 5,
                height: 90
                },
                headerTintColor: "white",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          /> 
          <appStack.Screen name="page2" component={page2}   options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#05857a',
                elevation: 5,
                height: 90
                },
                headerTintColor: "white",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}/>
          <appStack.Screen name="page3" component={page3}   options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#05857a',
                elevation: 5,
                height: 90
                },
                headerTintColor: "white",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}/>
          <appStack.Screen name="Animes" component={Anime} 
           options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#049e8b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "white",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
          />
           <appStack.Screen name="Solo Leveling" component={Pagea}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
           <appStack.Screen name="Mashle" component={Pageb}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
           <appStack.Screen name="Spy Classroom" component={Pagec}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
           <appStack.Screen name="Reborn to Master the Blade" component={Paged}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
           <appStack.Screen name="Classroom for Heroes" component={Pagee}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
           <appStack.Screen name="Konosuba" component={Pagef}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="No Game No Life" component={Anime1}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="The Promised Neverland" component={Anime2}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="OverLord" component={Anime3}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="That time I got Reincarnated as a Slime" component={Anime4}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="Summertime Render" component={Anime5}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
          <appStack.Screen name="One Punch Man" component={Anime6}
            options={() => ({
                headerLeft: null,
                headerStyle: {
                backgroundColor: '#19a89b',
                elevation: 5,
                height: 90
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                marginLeft: 7,
                textAlign: "left",
                fontSize: 20,
                
                },
            })}
            
          />
         <appStack.Screen name="Tabs" component={Tabs}  options={{headerShown: false
  ,}}/>
        </appStack.Navigator>
      </NavigationContainer>
    );
  }
}