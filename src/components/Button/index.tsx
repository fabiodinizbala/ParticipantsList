import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import {styles} from './styles';

interface IProps extends TouchableOpacityProps{
  name:string;
}
export function Button({name, ...rest}:IProps){
  const backgroundColorButton = name==='+'? '#31CF67': '#E23C44';
  return (
     <TouchableOpacity  
      style={[styles.button,{backgroundColor:backgroundColorButton}]}
      {...rest}
      >
          <Text style={styles.textButton}>{name}</Text>
      </TouchableOpacity>
  )
}