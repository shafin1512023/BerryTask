import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./components.style";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>BerryTask</Text>
            <Image
                style={styles.headerIcon}
                source={require("./assets/berryIconDark.png")}
            />
        </View>
    );
};

const Input = ({ doOnPress, value, onChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={value}
                onChangeText={(text) => onChange(text)}
                style={styles.inputField}
                placeholder="Add new task"
            />
            <TouchableOpacity onPress={doOnPress} style={styles.inputBtn}>
                <Text style={styles.inputBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const Task = ({ task, time, doOnPress }) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTime}>Added - {time}</Text>
            <Text style={styles.taskHeader}>{task}</Text>
            <TouchableOpacity onPress={doOnPress} style={styles.taskCloseBtn}>
                <Text style={styles.taskCloseBtnText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const Components = {
    Header: Header,
    Input: Input,
    Task: Task,
};

export default Components;
