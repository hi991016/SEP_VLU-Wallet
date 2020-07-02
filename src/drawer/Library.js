import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function LibraryScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>hi</Text>
        </View>
    );
}

const Library = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    title: 'Library',
                    headerStyle: {
                        backgroundColor: "#e1e6ea",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#434c73',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="md-arrow-back" size={24} color="#434c73" style={{ paddingHorizontal: 18 }} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    );
}

export default Library

const styles = StyleSheet.create({})
