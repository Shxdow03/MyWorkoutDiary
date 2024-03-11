import { useEffect, useState } from "react";
import { Pressable, View, Text } from "react-native";
import Style from "../styles/Style";

export default function RadioButton({options, onPress}) {
    const [value, setValue] = useState('km');

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return(
        <>
            {
                options.map((item) => (
                    <View key={item.value} style={Style.buttonContainer}>
                        <Text style={Style.label}>{item.label}</Text>
                        <Pressable style={Style.circle} onPress={() => handlePress(item.value)}>
                            {value === item.value && <View style={Style.checkedCircle}/>}
                        </Pressable>
                    </View>
                ))
            }
        </>
    );
}