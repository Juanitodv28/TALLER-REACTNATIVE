import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MiBoton from '../components/MiBoton';
import { mostrarAlerta } from '../utils/alerta';

const correo = 'jpablosanch28@gmail.com';
const telefono = '+57 320 363 4494';
const repositorio =
  'https://github.com/Juanitodv28/TALLER-REACTNATIVE';
const perfilGitHub = 'https://github.com/Juanitodv28';

async function abrirEnlace(url: string) {
  try {
    if (Platform.OS === 'web' && /^https?:\/\//i.test(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    await Linking.openURL(url);
  } catch {
    mostrarAlerta(
      'No se pudo abrir el enlace',
      'No se pudo completar la acción. Verifica que tengas una aplicación disponible e inténtalo nuevamente.',
    );
  }
}

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
              mostrarAlerta(
                'Correo de contacto',
                `Puedes escribirle a Juan Pablo a:\n${correo}`,
                [
                  {
                    texto: 'Enviar correo',
                    estilo: 'principal',
                    onPress: () => {
                      void abrirEnlace(`mailto:${correo}`);
                    },
                  },
                  { texto: 'Cerrar', estilo: 'cancelar' },
                ],
              )
            }
          />
          <MiBoton
            textoBoton="Llamar"
            nombreIcono="call"
            colorBoton="#3b82f6"
            onPress={() =>
              mostrarAlerta(
                'Teléfono de contacto',
                `Número móvil de Juan Pablo:\n${telefono}`,
                [
                  {
                    texto: 'Llamar ahora',
                    estilo: 'principal',
                    onPress: () => {
                      void abrirEnlace(`tel:${telefono.replace(/\s/g, '')}`);
                    },
                  },
                  { texto: 'Cerrar', estilo: 'cancelar' },
                ],
              )
            }
          />
          <MiBoton
            textoBoton="Repositorio GitHub"
            nombreIcono="logo-github"
            colorBoton="#24292e"
            onPress={() =>
              mostrarAlerta(
                'Repositorio del proyecto',
                'Consulta el código fuente de esta hoja de vida en GitHub.',
                [
                  {
                    texto: 'Abrir repositorio',
                    estilo: 'principal',
                    onPress: () => {
                      void abrirEnlace(repositorio);
                    },
                  },
                  { texto: 'Cerrar', estilo: 'cancelar' },
                ],
              )
            }
          />
          <MiBoton
            textoBoton="Perfil Profesional"
            nombreIcono="briefcase"
            colorBoton="#0a66c2"
            onPress={() =>
              mostrarAlerta(
                'Perfil profesional',
                'Juan Pablo Sánchez Baquero\nTécnico en Análisis y Desarrollo de Software (ADSO), con experiencia en soporte técnico de hardware, mantenimiento de equipos y desarrollo de aplicaciones móviles con React Native.',
              )
            }
          />
          <MiBoton
            textoBoton="Portafolio de Proyectos"
            nombreIcono="code-slash"
            colorBoton="#10b981"
            onPress={() =>
              mostrarAlerta(
                'Portafolio de proyectos',
                `Explora los proyectos y el trabajo de Juan Pablo en GitHub:\n${perfilGitHub}`,
                [
                  {
                    texto: 'Ver portafolio',
                    estilo: 'principal',
                    onPress: () => {
                      void abrirEnlace(perfilGitHub);
                    },
                  },
                  { texto: 'Cerrar', estilo: 'cancelar' },
                ],
              )
            }
          />
          <MiBoton
            textoBoton="Formación SENA"
            nombreIcono="school"
            colorBoton="#6366f1"
            onPress={() =>
              mostrarAlerta(
                'Formación SENA',
                'Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMLTI), Regional Distrito Capital.\n\nPrograma: Tecnología en Análisis y Desarrollo de Software (ADSO).\nFicha: 3407187.\nEstado: En curso.',
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
