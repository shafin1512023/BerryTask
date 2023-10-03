import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import COLORS from "./CONSTANTS";
import Components from "./components";

export default function App() {
    const [tasksList, setTasksList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handlePress = () => {
        if (!newTask) {
            return;
        }

        const now = new Date();

        const newTaskList = {
            task: newTask,
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
        };

        setTasksList([...tasksList, newTaskList]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        const newTaskList = tasksList.filter((_, i) => i !== index);
        setTasksList(newTaskList);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Components.Header />
            <View style={styles.body}>
                <Components.Input
                    value={newTask}
                    onChange={setNewTask}
                    doOnPress={handlePress}
                />
                <ScrollView style={styles.tasksContainer}>
                    {tasksList.map((eachTask, index) => (
                        <Components.Task
                            key={index}
                            task={eachTask.task}
                            time={eachTask.time}
                            doOnPress={() => deleteTask(index)}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBG,
    },
    body: {
        flex: 1,
        alignItems: "center",
        padding: 30,
    },
    tasksContainer: {
        width: "100%",
        marginTop: 20,
    },
});
