import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:'#131016'
  },
  title:{
    color: '#FDFCFE',
    fontSize:24,
    fontWeight:'bold'
  },
  date:{
    color:'#6B6B6B',
    fontSize:16,
    marginTop:3
  },
  containerRegisterParticipant:{
    marginTop:36,
    marginBottom:42,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    flex:1,
    height:56,
    backgroundColor:'#1F1E25',
    fontSize:14,
    color:'#6B6B6B',
    padding:14,
    borderRadius:4
  },
  titleListParticipant:{
    color: '#FDFCFE',
    fontSize:20,
    fontWeight:'bold'
  },
  containerListParticipant:{
  },
  textEmptyList:{
    color: '#FDFCFE',
    fontSize:14,
    textAlign:'center',
  },
  
})