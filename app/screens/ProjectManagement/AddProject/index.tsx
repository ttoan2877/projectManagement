import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import styles from './styles';
import NavigationService from '../../../navigation/NavigationService';

const AddProject: React.FC = () => {
  const [project, setProject] = useState<any>({});

  const onChange = useCallback((prop: string, value: string) => {
    setProject((x: any) => ({ ...x, [prop]: value }));
  }, []);

  const onSave = useCallback(() => {
    NavigationService.navigate('ViewProject', { project });
  }, [project]);

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
        label="Project Name"
        value={project.name}
        onChangeText={value => onChange('name', value)}
      />
      <TextInput
        label="Description"
        value={project.description}
        onChangeText={value => onChange('description', value)}
      />
      <TextInput
        label="Assignee"
        value={project.assignee}
        onChangeText={value => onChange('assignee', value)}
      />
      <Button onPress={onSave}>Save</Button>
      <Button onPress={onDiscard}>Discard</Button>
    </View>
  );
};

export default AddProject;
