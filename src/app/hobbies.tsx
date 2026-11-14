import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaHobby from '../components/TarjetaHobby';

export default function HobbiesScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heading}>
          <Ionicons
            name="game-controller-outline"
            size={36}
            color="#2563eb"
          />
          <Text style={styles.title}>Intereses / Hobbies</Text>
          <Text style={styles.subtitle}>
            Toca una tarjeta para ver más información
          </Text>
        </View>
        <TarjetaHobby
          nombre="Escuchar Música"
          descripcion="Estimulación auditiva para concentración y productividad."
          icono="musical-notes-outline"
          detalleAlerta="La música me acompaña durante las jornadas de desarrollo, aumentando mi enfoque y creatividad al programar."
        />
        <TarjetaHobby
          nombre="Jugar Fútbol"
          descripcion="Deporte de equipo, coordinación y condición física."
          icono="football-outline"
          detalleAlerta="Practico fútbol para fomentar el trabajo en equipo, la agilidad, la comunicación y el despeje mental."
        />
        <TarjetaHobby
          nombre="Jugar Videojuegos"
          descripcion="Estrategia, reflejos y resolución de problemas interactivos."
          icono="game-controller-outline"
          detalleAlerta="Los videojuegos fortalecen mi pensamiento táctico, capacidad analítica y el análisis de interfaces interactivas."
        />
        <TarjetaHobby
          nombre="Leer"
          descripcion="Hábito constante de aprendizaje y cultura general."
          icono="book-outline"
          detalleAlerta="Dedico tiempo a la lectura sobre nuevas tecnologías, desarrollo personal y documentación técnica."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 18,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 22,
  },
  safeArea: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
  subtitle: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  title: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
    textAlign: 'center',
  },
});
