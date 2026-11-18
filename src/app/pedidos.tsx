import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PedidosScreen() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Ionicons name="cart-outline" size={38} color="#2563eb" />
          <Text style={styles.headingTitle}>Menú de Pedidos</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="code-slash-outline" size={30} color="#64748b" />
          <Text style={styles.itemName}>Mejorar Front End</Text>

          <View style={styles.quantityControl}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Disminuir cantidad"
              accessibilityState={{ disabled: cantidad === 0 }}
              disabled={cantidad === 0}
              onPress={() => setCantidad((actual) => Math.max(0, actual - 1))}
              style={({ pressed }) => [
                styles.quantityButton,
                cantidad === 0 && styles.quantityButtonDisabled,
                pressed && styles.quantityButtonPressed,
              ]}
            >
              <Ionicons name="remove" size={22} color="#ffffff" />
            </Pressable>

            <Text
              accessibilityLabel={`Cantidad: ${cantidad}`}
              style={styles.quantity}
            >
              {cantidad}
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Aumentar cantidad"
              onPress={() => setCantidad((actual) => actual + 1)}
              style={({ pressed }) => [
                styles.quantityButton,
                pressed && styles.quantityButtonPressed,
              ]}
            >
              <Ionicons name="add" size={22} color="#ffffff" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  content: {
    flex: 1,
    padding: 18,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headingTitle: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
    textAlign: 'center',
  },
  itemName: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'center',
  },
  quantity: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '700',
    minWidth: 44,
    textAlign: 'center',
  },
  quantityButton: {
    alignItems: 'center',
    backgroundColor: '#10b981',
    borderRadius: 8,
    height: 44,
    justifyContent: 'center',
    width: 48,
  },
  quantityButtonDisabled: {
    backgroundColor: '#94a3b8',
  },
  quantityButtonPressed: {
    opacity: 0.75,
  },
  quantityControl: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  safeArea: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
});
