
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import VentanaAlerta from '../components/AlertaTemp';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#2563eb',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            headerTitle: 'Datos Personales',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={typeof color === 'string' ? color : '#2563eb'}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="estudios"
          options={{
            title: 'Estudios',
            headerTitle: 'Formación Académica',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="school-outline"
                size={size}
                color={typeof color === 'string' ? color : '#2563eb'}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="experiencia"
          options={{
            title: 'Experiencia',
            headerTitle: 'Experiencia Laboral',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="briefcase-outline"
                size={size}
                color={typeof color === 'string' ? color : '#2563eb'}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="hobbies"
          options={{
            title: 'Hobbies',
            headerTitle: 'Intereses / Hobbies',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="heart-outline"
                size={size}
                color={typeof color === 'string' ? color : '#2563eb'}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="pedidos"
          options={{
            title: 'Pedidos',
            headerTitle: 'Menú de Pedidos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="cart-outline"
                size={size}
                color={typeof color === 'string' ? color : '#2563eb'}
              />
            ),
          }}
        />
      </Tabs>

      <VentanaAlerta />
    </>
  );
}
