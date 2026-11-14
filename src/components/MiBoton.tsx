import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type MiBotonProps = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({
  textoBoton,
  nombreIcono,
  colorBoton,
  onPress,
}: MiBotonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, { backgroundColor: colorBoton }]}
    >
      <Ionicons name={nombreIcono} size={20} color="#ffffff" />
      <Text style={styles.label}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
});
