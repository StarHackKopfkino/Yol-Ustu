import { View, Text } from "react-native";

function GasStationComponent(props){

    return(
        <View style={{ width: "100%", height: "100px"}}>
            <Text>
                {props.gasStationName}
            </Text>
        </View>
    );
}

export default GasStationComponent;