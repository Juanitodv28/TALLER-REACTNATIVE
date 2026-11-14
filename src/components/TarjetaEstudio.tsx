import { StyleSheet, Text, View } from 'react-native';

type TarjetaEstudioProps = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  titulo,
  institucion,
  anio,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View
      style={[
        styles.card,
        enCurso ? styles.currentCard : styles.completedCard,
      ]}
    >
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.institution}>{institucion}</Text>
      <Text style={styles.year}>{anio}</Text>
      {enCurso && (
        <View style={styles.statusBadge}>
          <Text style={styles.statusLabel}>En Curso</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1.5,
    marginBottom: 12,
    padding: 16,
  },
  completedCard: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
  },
  currentCard: {
    backgroundColor: '#eef2ff',
    borderColor: '#6366f1',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#6366f1',
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  institution: {
    color: '#475569',
    fontSize: 15,
    marginTop: 6,
  },
  title: {
    color: '#0f172a',
    fontSize: 17,
    fontWeight: '700',
  },
  statusLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  year: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 6,
  },
});
