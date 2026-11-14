import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function ExperienciaScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heading}>
          <Ionicons name="briefcase-outline" size={36} color="#2563eb" />
          <Text style={styles.title}>Experiencia Laboral</Text>
          <Text style={styles.subtitle}>Trayectoria profesional y formativa</Text>
        </View>
        <TarjetaExperiencia
          cargo="Auxiliar en Soporte Físico de Dispositivos Electrónicos"
          empresa="Soporte Técnico Especializado"
          periodo="2024 - Presente"
          descripcion="Diagnóstico, mantenimiento preventivo y correctivo de hardware, ensamblaje y soporte a dispositivos electrónicos y equipos de cómputo."
        />
        <TarjetaExperiencia
          cargo="Desarrollador de Software Junior (Etapa Formativa)"
          empresa="Proyectos Formativos SENA - ADSO"
          periodo="2024 - 2025"
          descripcion="Desarrollo de interfaces de usuario con React Native y TypeScript, diseño de arquitecturas de componentes e integración con navegación nativa."
        />
        <TarjetaExperiencia
          cargo="Técnico en Configuración y Despliegue de Sistemas"
          empresa="Servicios Digitales Independientes"
          periodo="2023 - 2024"
          descripcion="Instalación y configuración de software, control de versiones con Git/GitHub y soporte técnico a usuarios."
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
    lineHeight: 20,
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
