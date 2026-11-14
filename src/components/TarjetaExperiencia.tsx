import { StyleSheet, Text, View } from 'react-native';

type TarjetaExperienciaProps = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.role}>{cargo}</Text>
      <Text style={styles.company}>{empresa}</Text>
      <Text style={styles.period}>{periodo}</Text>
      <Text style={styles.description}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  company: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },
  description: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  period: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 4,
  },
  role: {
    color: '#0f172a',
    fontSize: 17,
    fontWeight: '700',
  },
});
