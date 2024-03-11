import { useContext } from "react";
import { View, Text } from "react-native";
import { UnitContext } from "../contexts/Context";
import RadioButton from "./Radio";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from "../styles/Style";
import { moderateScale } from "../metrics/Metrics";

export default function Settings() {

    const {unit, setUnit} = useContext(UnitContext);

    const options = [
        {
            label: 'Kilometers',
            value: 'km'
        },
        {
            label: 'Miles',
            value: 'mi'
        }
    ]

    return(
        <View style={Style.settingsView}>
            <View style={Style.unitsView}>
                <View style={Style.headerView}>
                    <Text style={Style.settingsText}>Units</Text>
                    <MaterialCommunityIcons name='cogs' size={moderateScale(24)} color='black' style={Style.icon}/>
                </View>
                <RadioButton options={options} onPress={(value) => {setUnit(value)}}/>
            </View>
        </View>
    );
}