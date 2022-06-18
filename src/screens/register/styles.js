import { StyleSheet } from "react-native";
import { getSize } from "../../utils/helpers";

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 25, alignContent: 'center', alignItems: 'center', paddingVertical: getSize.widthScreen / 2.5
    },
    image: {
        width: getSize.widthScreen / 2.5, height: getSize.widthScreen / 2.5, resizeMode: 'center'
    },
});
export default styles;