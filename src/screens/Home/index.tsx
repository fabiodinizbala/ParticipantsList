import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import { Participant } from '../../components/Participant';

import {styles} from './styles';

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
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titleListParticipant}>Participantes</Text>
        <View style={styles.containerListparticipant}>
          <Text style={styles.textEmptyList}>Ninguém chegou no evento ainda? 
                Adicione participantes a sua lista de presença.
          </Text>

          <Participant/>
        </View>
      </View>
    </View>
  )
}