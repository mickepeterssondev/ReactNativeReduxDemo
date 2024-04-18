import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ITask } from '../entities/ITask';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../Redux/types';
import { fetchTasks } from '../Redux/actions/taskFunctions';
import TaskCard from './Components/TaskCard';


const TasksScreen: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();
  const [tasks, setTasks] = useState<ITask[]>([]);
  const dailyTasks = useSelector((state: RootState) => state.tasks.tasks) as ITask[];

 useEffect(() => {
    const fetchData = () => {
      return dispatch(fetchTasks());
    };
    fetchData();
 }, [dispatch]);

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={dailyTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard task={item} onPress={() => console.log('Task pressed:', item)} />
        )}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 taskItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
 },
 taskText: {
    fontSize: 18,
 },
});

export default TasksScreen;