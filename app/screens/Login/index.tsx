import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../../store/actions/loginActions';
import styles from './styles';
import { ILoginState } from '../../models/reducers/login';
import NavigationService from '../../navigation/NavigationService';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    try {
      dispatch(requestLogin(username, password));
    } catch (e) {
      console.log(e);
    }
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
      <Button
        mode="text"
        style={styles.forgot}
        labelStyle={styles.labelStyle}
        onPress={onForgot}>
        Forgot Password
      </Button>
    </View>
  );
};

export default Login;
