import { View, Text,Map } from "react-native";

function HomePageComponent(props){

    return(
        
        <View style={{ width: "100%", height: "100%"}}>
            <Map style={{ width: "100%", flex : 7}}>

            </Map>
                <View style={{ width: "100%", flex : 7}}>
                    <View style={{ width: "100%", flex : 1}}>
                        <View>
                            <Text>
                                Akaryakıt
                            </Text>
                        </View> 
                        <View style={{ width: "100%", flex : 1}}>
                            <Text>
                                Market
                            </Text>
                        </View>
                        <View style={{ width: "100%", flex : 1}}>
                            <Text>
                                Yemek
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    );
}

export default HomePageComponent;
