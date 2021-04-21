import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import styles from './styles';
import NavigationService from '../../../navigation/NavigationService';

const AddTask: React.FC = () => {
  const [task, setTask] = useState<any>({});

  const onChange = useCallback((prop: string, value: string) => {
    setTask((x: any) => ({ ...x, [prop]: value }));
  }, []);

  const onSave = useCallback(() => {
    NavigationService.navigate('ViewTask', { task });
  }, [task]);

  const onDiscard = useCallback(() => {
    Alert.alert('Notice', 'Are you sure discard', [
      {
        text: 'Keep changes',
      },
      {
        text: 'Sure',
        onPress: () => NavigationService.goBack(),
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        label="Task Name"
        value={task.title}
        onChangeText={value => onChange('title', value)}
      />
      <TextInput
        label="Description"
        value={task.description}
        onChangeText={value => onChange('description', value)}
      />
      <TextInput
        label="Assignee"
        value={task.assignee}
        onChangeText={value => onChange('assignee', value)}
      />
      <Button onPress={onSave}>Save</Button>
      <Button onPress={onDiscard}>Discard</Button>
    </View>
  );
};

export default AddTask;
