import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';

function App(): React.JSX.Element {
  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>Code push</Text>
    </View>
  );
}

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  deploymentKey: '83znkQQS0HCDZGusRuG6yfIJ1bp84ksvOXqog',
  serverUrl: 'http://10.0.2.2:3000',
};

export default codePush(codePushOptions)(App);
