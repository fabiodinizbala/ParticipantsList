import {View, Text} from 'react-native';
import { Button } from '../Button';


import {styles} from './styles';

interface IProps {
  name:string;
}
export function Participant({name}:IProps){
  return (
    <View style={styles.container}>
      <Text style={styles.nameUser}>{name}</Text>
      <Button name="-" onPress={()=>{}}/>
    </View>
  )
}