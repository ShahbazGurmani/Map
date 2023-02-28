import react from "react";
import * as React from react;
import {MapView} from 'expo';
import { StyleSheet } from "react-native";

class App extends react.Component{

  render(){
    return(

      <MapView>
        initialRegion = {{
          latitude:28.7041,
          longitude:77.1025,
          latitudeDelta:0.1,
          longitudeDelta:0.1,
        }}
      </MapView>

    )
  }

}

const style = StyleSheet.create({
  map:
  {
    flex:1
  }
})
export default App