import React, { Component } from 'react';
import {
      NativeRouter,
      Switch,
      Route
    }
    from 'react-router-native'
import {   
        StyleSheet, 
        View
        
        } 
        from 'react-native';
import Home from './src/pages/Home.js';
import StadiumsList from './src/pages/StadiumsList.js'




export default class App extends Component{
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  exact path="/stadiumslist" component={StadiumsList} />
            </Switch>
          </View>
        </NativeRouter>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})