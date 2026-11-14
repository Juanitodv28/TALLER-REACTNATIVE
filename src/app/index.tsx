import { Ionicons } from '@expo/vector-icons';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MiBoton from '../components/MiBoton';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileHeader}>
          <Ionicons name="person-circle" size={100} color="#2563eb" />
          <Text style={styles.name}>JUAN PABLO SANCHEZ BAQUERO</Text>
          <Text style={styles.profession}>Tecnólogo en ADSO - Ficha 3407187</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Perfil Profesional</Text>
          <Text style={styles.body}>
            Aprendiz SENA del programa Análisis y Desarrollo de Software.
            Técnico ya certificado en ADSO y actualmente cursando la etapa
            tecnológica. Con experiencia en soporte físico de dispositivos
            electrónicos, formación complementaria con Google y la Universidad
            de California en marketing digital y toma de decisiones, y
            desarrollo de aplicaciones móviles con React Native.
          </Text>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <MiBoton
            textoBoton="Enviar Correo"
            nombreIcono="mail"
            colorBoton="#eab308"
            onPress={() =>
              Alert.alert('Correo de Contacto', 'jpablosanch28@gmail.com')
            }
          />
          <MiBoton
            textoBoton="Llamar"
            nombreIcono="call"
            colorBoton="#3b82f6"
            onPress={() =>
              Alert.alert('Teléfono de Contacto', 'Móvil: +57 320 363 4494')
            }
          />
          <MiBoton
            textoBoton="Repositorio GitHub"
            nombreIcono="logo-github"
            colorBoton="#24292e"
            onPress={() =>
              Alert.alert(
                'Repositorio Oficial',
                'https://github.com/Juanitodv28/TALLER-REACTNATIVE.git',
              )
            }
          />
          <MiBoton
            textoBoton="Perfil Profesional"
            nombreIcono="briefcase"
            colorBoton="#0a66c2"
            onPress={() =>
              Alert.alert(
                'Perfil Laboral',
                'Juan Pablo Sánchez Baquero - Técnico en ADSO / Soporte TI',
              )
            }
          />
          <MiBoton
            textoBoton="Portafolio de Proyectos"
            nombreIcono="code-slash"
            colorBoton="#10b981"
            onPress={() =>
              Alert.alert(
                'Proyectos',
                'Visita mi GitHub: github.com/Juanitodv28',
              )
            }
          />
          <MiBoton
            textoBoton="Formación SENA"
            nombreIcono="school"
            colorBoton="#6366f1"
            onPress={() =>
              Alert.alert(
                'Centro de Formación',
                'SENA - CGMLTI Regional Distrito Capital',
              )
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    padding: 18,
  },
  contactSection: {
    marginBottom: 18,
  },
  content: {
    padding: 18,
  },
  name: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 6,
    textAlign: 'center',
  },
  profession: {
    color: '#2563eb',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 22,
  },
  safeArea: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
});
