import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
//import { Colors } from 'react-native/Libraries/Color';
const Colors = {
  lighter: '#333',
  black: '#FFF',
  dark: '#FFF'
}

import LoginView from './src/LoginView';
import ArtistDetailView from './src/ArtistDetailView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} hideNavBar />
    <Scene key="artistDetail" component={ArtistDetailView} title="Detalles" hideNavBar={false} />
  </Scene>
);

type Props = {}

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
})