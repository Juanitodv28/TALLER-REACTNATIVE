import { Ionicons } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type TarjetaHobbyProps = {
  nombre: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  detalleAlerta: string;
};

export default function TarjetaHobby({
  nombre,
  descripcion,
  icono,
  detalleAlerta,
}: TarjetaHobbyProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={() => Alert.alert(nombre, detalleAlerta)}
      style={styles.card}
    >
      <View style={styles.iconCircle}>
        <Ionicons name={icono} size={27} color="#2563eb" />
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.description}>{descripcion}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 14,
  },
  copy: {
    flex: 1,
    marginHorizontal: 12,
  },
  description: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  iconCircle: {
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  name: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
  },
});
