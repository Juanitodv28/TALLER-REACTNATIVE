import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function EstudiosScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heading}>
          <Ionicons name="school-outline" size={36} color="#2563eb" />
          <Text style={styles.title}>Formación Académica</Text>
          <Text style={styles.subtitle}>Trayectoria académica</Text>
        </View>
        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="JUAN LUIS LONDOÑO DE LA SALLE IED"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico en ADSO (Certificado)"
          institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Marketing Digital: Atraer e Interactuar con Clientes"
          institucion="Google (Certificación Coursera)"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Resolución de Problemas y Toma de Decisiones con Eficacia"
          institucion="University of California, Irvine (Coursera)"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnología en Análisis y Desarrollo de Software (ADSO)"
          institucion="SENA - Ficha 3407187"
          anio={2026}
          enCurso
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
  },
  title: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
    textAlign: 'center',
  },
});
