import { StyleSheet } from "react-native";
import COLORS from "./CONSTANTS";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.primaryBG,
        elevation: 15,
        width: "100%",
        height: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    headerText: {
        color: COLORS.primaryText,
        fontWeight: "900",
        fontSize: 20,
        marginRight: 5,
    },
    headerIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
    },
    inputContainer: {
        width: "100%",
        height: 120,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.secondaryBG,
    },
    inputField: {
        width: "100%",
        backgroundColor: COLORS.secondaryBG,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 5,
    },
    inputBtn: {
        backgroundColor: COLORS.secondaryBG,
        width: "40%",
        alignSelf: "flex-end",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 100,
        elevation: 5,
    },
    inputBtnText: {
        color: COLORS.primaryText,
    },
    taskContainer: {
        backgroundColor: COLORS.secondaryBG,
        width: "100%",
        height: 150,
        elevation: 5,
        borderRadius: 20,
        borderTopRightRadius: 100,
        padding: 20,
        marginVertical: 10,
    },
    taskTime: {
        color: COLORS.secondaryText,
    },
    taskHeader: {
        fontWeight: "900",
        position: "relative",
        top: 30,
        fontSize: 20,
        color: COLORS.primaryText,
    },
    taskCloseBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 20,
        padding: 10,
        backgroundColor: COLORS.primaryBG,
        borderRadius: 10,
    },
    taskCloseBtnText: {
        color: COLORS.primaryText,
    },
});

export default styles;
