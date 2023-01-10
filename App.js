import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawerScreen from "./src/navigation/AppDrawer";


function App() {
  
  return (
          <NavigationContainer>
            <AppDrawerScreen /> 
          </NavigationContainer>
  );
}

export default App;
