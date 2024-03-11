import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { verticalScale, horizontalScale, moderateScale} from "../metrics/Metrics";

export default Style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: verticalScale(10),
        paddingHorizontal: horizontalScale(30),
        marginTop: verticalScale(10)
    },
    settingsView: {
        backgroundColor: '#eccece', 
        flex: 1
    },
    exerciseView: {
        backgroundColor: '#eccece', 
        flex: 1
    },
    calendarView: {
        backgroundColor: '#eccece', 
        flex: 1
    },
    calendar: {
        marginTop: Constants.statusBarHeight, 
        marginHorizontal: horizontalScale(10), 
        borderWidth: moderateScale(2), 
        borderColor: 'maroon', 
        borderRadius: moderateScale(10), 
        backgroundColor: '#efdfdfff',
        padding: moderateScale(10)
    },
    safeAreaView: {
        margin: moderateScale(10)
    },
    scrollView: {
        marginHorizontal: horizontalScale(10), 
        marginBottom: verticalScale(30)
    },
    segmentedButtons: {
        backgroundColor: '#c7a6a6'
    },
    exerciseInput: {
        marginTop: verticalScale(10)
    },
    modalButton: {
        backgroundColor: 'maroon', 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: moderateScale(20), 
        padding: moderateScale(7)
    },
    unitsView: {
        margin: moderateScale(10), 
        borderWidth: moderateScale(2), 
        borderRadius: moderateScale(5), 
        padding: moderateScale(10), 
        borderColor: 'maroon', 
        backgroundColor: '#efdfdf'
    },
    headerView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderBottomWidth: moderateScale(2), 
        borderBottomColor: 'maroon', 
        paddingBottom: verticalScale(5)
    },
    exerciseListView: {
        flex: 1, 
        justifyContent: 'space-between', 
        backgroundColor: '#eccece'
    },
    exercises: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: verticalScale(10),
        flexWrap: 'wrap',
        marginBottom: verticalScale(5)
    },
    exercise: {
        backgroundColor: '#efdfdf', 
        borderRadius: moderateScale(25), 
        borderWidth: moderateScale(2), 
        borderColor: 'maroon', 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: moderateScale(10), 
        marginHorizontal: horizontalScale(5)
    },
    exerciseText: {
        fontSize: moderateScale(16), 
        color: 'maroon'
    },
    calendarButton: {
        alignSelf: 'center', 
        marginTop: verticalScale(10)
    },
    sumIcon: {
        marginRight: horizontalScale(5)
    },
    settingsText: {
        fontSize: moderateScale(24), 
        fontWeight: 'bold', 
        color: 'black', 
        marginHorizontal: horizontalScale(10)
    },
    textInput: {
        borderRadius: moderateScale(10)
    },
    titleStyle: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    exerciseText: {
        fontSize: 16
    },
    card: {
        marginTop: verticalScale(10), 
        backgroundColor: '#efdfdf', 
        borderWidth: moderateScale(2), 
        borderColor: 'maroon'
    },
    clearListButton: {
        alignItems: 'center', 
        marginHorizontal: horizontalScale(50), 
        marginBottom: verticalScale(10), 
        borderRadius: moderateScale(20), 
        borderColor: 'maroon', 
        backgroundColor: 'white', 
        borderWidth: moderateScale(1)
    },
    clearListButtonText: {
        padding: moderateScale(10), 
        fontSize: moderateScale(20), 
        color: 'maroon'
    },
    icon: {
        borderWidth: moderateScale(2), 
        borderRadius: moderateScale(5)
    },
    exerciseListIcon: {
        backgroundColor: 'maroon'
    },
    label: {
        marginRight: horizontalScale(10),
        color: 'maroon',
        fontSize: moderateScale(20)
    },
    dateIcon: {
        paddingLeft: horizontalScale(5)
    },
    dateText: {
        fontSize: moderateScale(14), 
        color: 'white', 
        marginLeft: horizontalScale(10)
    },
    addWorkout: {
        marginTop: verticalScale(10), 
        backgroundColor: '#efdfdfff', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: moderateScale(8), 
        borderWidth: moderateScale(1), 
        borderColor: 'white', 
        borderRadius: moderateScale(20)
    },
    addWorkoutText: {
        color: 'maroon', 
        marginLeft: horizontalScale(5), 
        fontSize: moderateScale(18)
    },
    circle: {
        height: moderateScale(28),
        width: moderateScale(28),
        borderRadius: moderateScale(15),
        borderWidth: moderateScale(2),
        borderColor: 'maroon',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkedCircle: {
        width: moderateScale(15),
        height: moderateScale(15),
        borderRadius: moderateScale(7),
        backgroundColor: 'maroon'
    },
    tabBarBadge: {
        backgroundColor: '#eccece', 
        borderColor: 'maroon', 
        borderWidth: moderateScale(1), 
        color: 'maroon', 
        fontSize: moderateScale(11)
    },
    outline: {
        backgroundColor: '#b59090'
    },
    headerTitle: {
        fontSize: moderateScale(20),
        fontFamily: 'LatoRegular'
    },
    tabBarLabel: {
        fontSize: moderateScale(10),
        fontFamily: 'LatoRegular'
    }
})