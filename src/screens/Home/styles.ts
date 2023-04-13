import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft:24,
    paddingTop:75,
    backgroundColor:'#131016'
  },
  title:{
    color: '#FDFCFE',
    weight:'bold',
    fontSize:24,
  },
  date:{
    color: '#6B6B6',
    fontSize:16,
    marginTop:3
  },
  containerRegisterParticipant:{
    marginTop:75,
    marginBottom:28,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  input:{
    width:'100%',
    height:56,
    backgroundColor:'white',
    fontsize:14,
    color:'6B6B6B',
    padding:14,
    marginRight:12,
    borderRadius:4
  },
  button:{
    borderRadius:4,
    width:56,
    height:56,
    backgroundColor:'#31CF67',
    alignItems:'center',
    justifyContent: 'center'
  },
  textButton:{
    fontWeight:'bold',
    color:'#FFFFFF',
    fontSize:24,
  },
  titleListParticipant:{

  },
  containerListparticipant:{

  },
  textEmptyList:{

  },
})