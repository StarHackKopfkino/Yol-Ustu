import { View, Text,Map } from "react-native";

function HomePageController(props){

    return(
        <Map>

        </Map>
        <View style={{ width: "100%", height: "100px"}}>
            <Text>
                {props.gasStationName}
            </Text>
        </View>
    );
}

export default TestComponent;