import { View, Text } from "react-native";

function StoreComponent(props){

    return(
        <View style={{ width: "100%", height: "100px"}}>
            <Image>
                source={{ uri: image }}
                style={{ flex : 3, height:  "100%"}}
            </Image>
            <Text>
                {props.storeName}
                style={{ flex: 7, height: "100%" }}
            </Text>
        </View>
    );
}

export default StoreComponent;