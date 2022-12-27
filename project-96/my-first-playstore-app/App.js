import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import Formal_LetterScreen from "./screens/formal_letterScreen";
import Informal_LetterScreen from "./screens/informal_letterScreen";
import Writing_SkillScreen from "./screens/writing_skillScreen";
import BadNewsScreen from './screens/badnews';

// import loveScreen from "./screens/love_letter";
// import santa_letterScreen from "./screens/letter_to_santa";
// import friendshipletterScreen from "./screens/friendship";
// import invitationScreen from "./screens/invitation";
// import birthScreen from "./screens/birthday_letter";
// import welcomeScreen from "./screens/welcome";
// import ChristmasScreen from "./screens/christmas";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Informal letter" component={Informal_LetterScreen} />
        <Stack.Screen name="formal letter" component={Formal_LetterScreen} />
        <Stack.Screen name="writing skills" component={Writing_SkillScreen} />
        <Stack.Screen name="bad" component={BadNewsScreen} />

       {/* <Stack.Screen name="love_letter" component={loveScreen}/>
        <Stack.Screen name="santa_letter" component={santa_letterScreen}/>
        <Stack.Screen name="friendship_letter" component={friendshipletterScreen}/>
        <Stack.Screen name="invitation_letter" component={invitationScreen}/>
        <Stack.Screen name="birthday_format" component={birthScreen}/>
        <Stack.Screen name="welcome_format" component={welcomeScreen}/>         
        <Stack.Screen name="christmas_format" component={ChristmasScreen}/> */ }       


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;