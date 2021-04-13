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
  const [description, setDescription] = useState<string>('');
  const [assignee, setAssignee] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        label="Project Name"
        value={projectName}
        onChangeText={projectName => setProjectName(projectName)}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={description => setDescription(description)}
      />
      <TextInput
        label="Assignee"
        value={assignee}
        onChangeText={assignee => setAssignee(assignee)}
      />
      <Button onPress={onSave}>Save</Button>
      <Button onPress={onDiscard}>Discard</Button>
    </View>
  );
};

export default addProject;
