import React from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { ITask } from "../../entities/ITask";

interface TaskCardProps {
  task: ITask,
  onPress: (task: ITask) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task, onPress }) => {
  return (
    <Card style={styles.containerStyle} onPress={() => onPress(task)}>
      <Card.Content>
        <Paragraph>{task.content}</Paragraph>
        <Paragraph>Deadline: {task.deadline}</Paragraph>
        {task.important && <Paragraph>Important!</Paragraph>}
        {!task.finished && <Paragraph>Ongoing</Paragraph>}
      </Card.Content>
    </Card>
  )
}
  
const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: 'red'
  
  },
});

export default TaskCard;