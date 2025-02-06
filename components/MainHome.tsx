import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Services from './Pages/Services/Services';

const Tab = createBottomTabNavigator();


function HomeScreen() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
}

function SettingsScreen() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text>Settings Screen</Text>
        </SafeAreaView>
    );
}

function App() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    borderRadius: 30,
                    height: 60,
                    backgroundColor: '#6200ea',
                    elevation: 5,
                    borderWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                ),
            }} />

            <Tab.Screen name="Services" component={Services} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Icon name="briefcase" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="settings" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
