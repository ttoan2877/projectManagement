import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../../store/actions/loginActions';
import styles from './styles';
import { ILoginState } from '../../models/reducers/login';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  let status = '';

  const onLogin = () => {
    if (username === 'Admin' && password === 'password') {
      dispatch(requestLogin(username, password));
    } else if (username === '' || password === '') {
      Alert.alert('Notice', 'Please input Username or Password', [
        {
          text: 'OK',
        },
      ]);
    } else {
      Alert.alert('Notice', 'Wrong Username or Password', [
        {
          text: 'OK',
        },
      ]);
    }
  };
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  if (id === 1) {
    status = 'Not Login';
  }
  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        style={styles.textInput}
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button icon="login" onPress={onLogin} style={styles.login}>
        Login
      </Button>
      <Text style={styles.loginStatus}>Status: {status}</Text>
    </View>
  );
};

export default Login;
