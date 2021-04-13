import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import styles from './styles';

const addProject: React.FC = () => {
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

  const [projectName, setProjectName] = useState<string>('');
  const [projectDescription, setDescription] = useState<string>('');
  const [projectAssignee, setAssignee] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Project Name"
        value={projectName}
        onChangeText={projectName => setProjectName(projectName)}
      />
      <TextInput
        label="Description"
        value={projectDescription}
        onChangeText={projectDescription => setDescription(projectDescription)}
      />
      <TextInput
        label="Assignee"
        value={projectAssignee}
        onChangeText={projectAssignee => setAssignee(projectAssignee)}
      />
      <Button onPress={onSave}>Save</Button>
      <Button onPress={onDiscard}>Discard</Button>
    </View>
  );
};

export default addProject;
