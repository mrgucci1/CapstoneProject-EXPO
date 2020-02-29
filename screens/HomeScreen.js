import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: ['Event Date', 'Event Title', 'Event Type', 'Learn More'],
      tableData: [
        ['2/20/2020', 'Walmart Resume Reviews', 'Career Event', 'd'],
        ['3/12/2050', 'STEM Career Fair', 'Career Fair', 'd'],
        ['2/56/2902', 'Welcome to the party', 'Sup', 'd']
      ]

    };
}
_alertIndex(index) {
  switch (index){
    case 0:
      Alert.alert(`MORE INFORMATION on walmart resume reviews`);
      break;
    case 1:
      Alert.alert(`MORE INFORMATION on stem career fair`);
      break;
    case 2:
      Alert.alert(`MORE INFORMATION on welcome to the party`);
      break;
  }
  //Alert.alert(`MORE INFORMATION`);
}
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Info</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'black'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}


HomeScreen.navigationOptions = {
  header: null,
};

/*function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}*/

/*function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}*/

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#FEF2E4' },
  head: { height: 40, backgroundColor: '#E1AB35' },
  text: { margin: 6, color: '#46352D' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#46352D',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' 
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
