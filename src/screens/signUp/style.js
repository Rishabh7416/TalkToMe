import {StyleSheet} from 'react-native'
import colors from '../../utils/colors'
import { vh,normalize,vw,SCREEN_HEIGHT,SCREEN_WIDTH, DESIGN_HEIGHT, DESIGN_WIDTH } from '../../utils/dimensions'

const signUpStyles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:colors.primaryColor,
    },
    secondViewStyle:{
        height: '100%',
        width: '100%',
        borderTopLeftRadius:normalize(200),
        borderBottomRightRadius:normalize(200),
        paddingTop:vh(70),
        paddingHorizontal:normalize(40),
        backgroundColor:colors.primaryWhite,
    },
    createText:{
        marginTop:normalize(30),
        fontSize:normalize(24),
        fontWeight:'bold',
    },
    connectText:{
        marginTop:normalize(10),
        color:'grey',
        fontSize:normalize(13),
    },
    inputTitleText:{
        marginTop:vh(30),
        fontSize:normalize(16),
        fontWeight:'600',
        letterSpacing:vw(0.5)
    },
    nameInputView:{
        marginTop:vh(5),
        height:vh(44),
        width:vw(300),
        borderRadius:5,
        borderWidth:1,
        justifyContent:'center',
    },
    inpuStyle:{
        paddingHorizontal:vw(10),
        fontSize:vh(16),
    },
    aboutInputView:{
        marginTop:vh(5),
        height:vh(100),
        width:vw(300),
        borderRadius:5,
        borderWidth:1,
    },
    btnStyle: {
        height: normalize(53),
        width: normalize(310),
        marginTop: normalize(50),
        borderRadius: normalize(6),
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      },
    btnTextStyle:{
        color:colors.primaryWhite,
        fontSize:16,
        fontWeight:'600',
    },
    loginText2: {
        color: colors.primaryColor,
        fontWeight: 'bold',
      },
      AreadyLoginViewStyle: {
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        marginTop:vh(20),
        // bottom:vh(2),
      },

})

export default signUpStyles;