
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import RideDetails from '../screens/rideDetails';
import ListTrips from '../screens/listTrips';

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import IntroAddTrip from '../screens/introAddTrip';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#2196F3',
                tabBarInactiveTintColor: 'black',

            }}>

            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Home',
                }}
            />

            <Tab.Screen
                name="introAddTrip"
                component={IntroAddTrip}
                options={({ navigation }) => ({
                    title: 'Publish a Trip',
                    headerStyle: {
                        backgroundColor: '#f9f9f9',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#2c2c3b',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                    tabBarLabel: 'Publish',
                })}
            />

            <Tab.Screen
                name="listTrips"
                component={ListTrips}
                options={({ navigation }) => ({
                    title: 'List Trips',
                    headerStyle: {
                        backgroundColor: 'yellow',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#2c2c3b',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="list" size={size} color={color} />
                    ),
                })}
            />




        </Tab.Navigator>
    );
}

export default MyTabs