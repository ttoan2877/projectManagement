import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import styles from './styles';

const editProject: React.FC = () => {
  const onSave = () => {
    try {
      return (
        <View>
          <Text>{projectName}</Text>
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

  const [taskName, setTask] = useState<string>('');
  const [taskDescription, setDescription] = useState<string>('');
  const [taskAssignee, setAssignee] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Project Name"
        value={taskName}
        onChangeText={taskName => setTask(taskName)}
      />
      <TextInput
        label="Description"
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

export default editProject;
