
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { DatosAlerta } from '../utils/alerta';
import { registrarOyente } from '../utils/alerta';

export default function VentanaAlerta() {
  const [datos, setDatos] = useState<DatosAlerta | null>(null);

  useEffect(() => {
    registrarOyente(setDatos);

    return () => registrarOyente(null);
  }, []);

  const cerrar = () => setDatos(null);

  return (
    <Modal
      visible={datos !== null}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={cerrar}
    >
      <Pressable style={styles.fondo} onPress={cerrar}>
        <Pressable style={styles.caja} onPress={() => {}}>
          <View style={styles.textos}>
            <View style={styles.icono}>
              <Ionicons
                name="information-circle"
                size={30}
                color="#2563eb"
              />
            </View>
            <Text accessibilityRole="header" style={styles.titulo}>
              {datos?.titulo}
            </Text>

            {datos?.mensaje ? (
              <Text style={styles.mensaje}>
                {datos.mensaje}
              </Text>
            ) : null}
          </View>

          <View style={styles.botones}>
            {datos?.botones.map((boton, i) => (
              <Pressable
                key={`${boton.texto}-${i}`}
                accessibilityRole="button"
                onPress={() => {
                  cerrar();
                  boton.onPress?.();
                }}
                style={({ pressed }) => [
                  styles.boton,
                  boton.estilo === 'principal' && styles.botonPrincipal,
                  i > 0 && styles.separadorVertical,
                  pressed && styles.presionado,
                ]}
              >
                <Text
                  style={[
                    styles.textoBoton,
                    boton.estilo === 'cancelar' &&
                      styles.textoCancelar,
                    boton.estilo === 'principal' &&
                      styles.textoBotonPrincipal,
                  ]}
                >
                  {boton.texto}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  boton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: 48,
    paddingVertical: 12,
  },
  botones: {
    borderColor: '#e2e8f0',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  caja: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 12,
    maxWidth: 380,
    overflow: 'hidden',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    width: '88%',
  },
  fondo: {
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  icono: {
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    marginBottom: 12,
    width: 56,
  },
  mensaje: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    textAlign: 'center',
  },
  botonPrincipal: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    margin: 8,
  },
  presionado: {
    opacity: 0.78,
  },
  separadorVertical: {
    borderColor: '#e2e8f0',
    borderLeftWidth: 1,
  },
  textoBoton: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '700',
  },
  textoBotonPrincipal: {
    color: '#ffffff',
  },
  textoCancelar: {
    color: '#64748b',
    fontWeight: '600',
  },
  textos: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  titulo: {
    color: '#0f172a',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
});
