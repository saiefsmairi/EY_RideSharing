
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import RideDetails from '../screens/rideDetails';
import ListTrips from '../screens/listTrips';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IntroAddTrip from '../screens/introAddTrip';
import Profil from '../screens/profil';
import SearchTrips from '../screens/searchTrips';
import RequestRidesList from '../screens/requestRidesList';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

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
                name="Search"
                component={SearchTrips}
                options={({ navigation }) => ({
                    headerShown: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="search1" size={size} color={color} />
                    ),
                })}
            />



            <Tab.Screen
                name="introAddTrip"
                component={IntroAddTrip}
                options={({ navigation }) => ({
                    title: 'Publish a Trip',

                    headerStyle: {
                        backgroundColor: '#ffe600',
                    },
                    headerTitleStyle: {
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
            {/* 
            <Tab.Screen
                name="listTrips"
                component={ListTrips}
                options={({ navigation }) => ({
                    title: 'List Trips',

                    headerStyle: {
                        backgroundColor: '#eede1d',
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

  */}


  
            <Tab.Screen
                name="requestRidesList"
                component={RequestRidesList}
                options={({ navigation }) => ({
                    title: 'Requests',

                    headerStyle: {
                        backgroundColor: '#ffe600',
                    },
                    headerTitleStyle: {
                        color: '#2c2c3b',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="list-alt" size={size} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="profil"
                component={Profil}
                options={({ navigation }) => ({
                    title: 'Profil',
                    headerTitleStyle: {
                        color: '#2c2c3b',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={async () => {
                            try {
                                const user = await SecureStore.getItemAsync('user');
                                var userId = JSON.parse(user).id
                                const response = await axios.put(
                                    `https://da8a-102-157-148-107.ngrok-free.app/api/User/${userId}/deleteDeviceTokenLogout`,
                                    {
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                );
                                console.log(response.data)
                                await SecureStore.deleteItemAsync('user');
                                navigation.navigate('login');
                            }
                            catch (error) {
                                console.log("error logout ",error)
                            }
                        }}>
                            <MaterialIcons name="logout" size={24} color="black" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                })}
            />

        </Tab.Navigator>
    );
}

export default MyTabs