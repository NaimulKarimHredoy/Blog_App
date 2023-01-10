import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbuwrX7JlJtVdKiInu6Fh8mKYHs8dxOck",
  authDomain: "blog-native-d6293.firebaseapp.com",
  databaseURL: "https://blog-native-d6293-default-rtdb.firebaseio.com/",
  projectId: "blog-native-d6293",
  storageBucket: "blog-native-d6293.appspot.com",
  messagingSenderId: "139133121860",
  appId: "1:139133121860:web:60562a0f98dacad90a9311"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function App() {
  
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
