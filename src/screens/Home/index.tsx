import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import { Participant } from '../../components/Participant';

import {styles} from './styles';
import { Button } from '../../components/Button';

export function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>

      <Text style={styles.date}> Sexta, 4 de Novembro de 202</Text>

      <View style={styles.containerRegisterParticipant}>
        <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor='#6B6B6B'
            onChangeText={()=>{}}
        />
        <Button name="+"/>
      </View>

      <View>
        <Text style={styles.titleListParticipant}>Participantes</Text>
        
        <View style={styles.containerListParticipant}>
          <Text style={styles.textEmptyList}>
            Ninguém chegou no evento ainda?{'\n'}
                Adicione participantes a sua lista de presença.
          </Text>

          <Participant name="Fabio Abrantes"/>
          <Participant name="Fabio Abrantes"/>        

        </View>
      </View>
    </View>
  )
}