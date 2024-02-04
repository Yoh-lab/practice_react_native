import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const UserScreen = ({ route }) => {
    useEffect(() => {
        console.log('User Mount');
        return () => {
            console.log('User Unmount');
        };
    }, []);
    return (
        <View>
            <Text>ユーザ画面</Text>
            <Text>userId: {route.params.userId}</Text>
        </View>
    );
};

export default UserScreen;