import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backgroundImg:{
        flex: 1
    },
    topContainer:{
        marginTop: 100,
        alignItems: "center",
    },
    title:{
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.h1 * 1.5
    },
    subTitle:{
        color: COLORS.white,
        fontSize: SIZES.h4,
        paddingTop: 3,
    },
    dataContainer:{
        marginTop: 50,
    },
    textInput:{
        color: COLORS.white,
        fontSize: SIZES.h3,
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    btnContainer:{
        marginTop: 50,
    },
    button1:{
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        padding:20,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
    },
    btnText:{
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.h4,
    },
    button2:{
        flexDirection: "row",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        justifyContent:"center",
        alignItems:"center",
    },
    logo:{
        marginRight:10,
    },
    imgLogo:{
        width: 30,
        height: 30,
    },
    text:{
        color: COLORS.white,
        textAlign: "center",
        fontWeight: "600",
        fontSize: SIZES.h5,
        marginTop: 10,
    },
    bottomContainer:{},
})

export default styles