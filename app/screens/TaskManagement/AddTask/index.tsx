import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import styles from './styles';
import { add } from 'react-native-reanimated';

const addTask: React.FC = () => {
  const onSave = () => {
    try {
      return (
        <View>
          <Text>{task}</Text>
        </View>
      );
    } catch (e) {
      console.log(e);
    }
  };
  const onDiscard = () => {
    return (
      <View>
        <Text>Discard change</Text>
      </View>
    );
  };

  const [taskTile, setTask] = useState<string>('');
  const [taskDescription, setDescription] = useState<string>('');
  const [taskAssignee, setAssignee] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Tasks"
        value={taskTile}
        onChangeText={taskTile => setTask(taskTile)}
      />
      <TextInput
        label="Tasks Description"
        value={taskDescription}
        onChangeText={taskDescription => setDescription(taskDescription)}
      />
      <TextInput
        label="Assignee"
        value={taskAssignee}
        onChangeText={taskAssignee => setAssignee(taskAssignee)}
      />
      <Button onPress={onSave}>Save</Button>
      <Button onPress={onDiscard}>Discard</Button>
    </View>
  );
};

export default addTask;
