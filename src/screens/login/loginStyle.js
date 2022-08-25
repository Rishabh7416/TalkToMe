import {StyleSheet} from 'react-native'
import colors from '../../utils/colors'

export default styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:colors.primaryColor,
        justifyContent:'center',
        // alignItems:'center',
    },
    bigText:{
        fontSize:45,
        color:'white',
        marginLeft:20,
        fontWeight:'bold',
    },
    descriptionText:{
        fontSize:14,
        fontWeight:'500',
        color:'#FFFFFF',
        marginTop:25,
        marginLeft:20,

    },
    btnStyle:{
        height: 40,
        width:280,
        marginTop:20,
        borderRadius:6,
        marginHorizontal:20,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
    }

})