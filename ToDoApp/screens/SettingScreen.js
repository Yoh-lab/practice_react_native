import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SettingScreen = () => {
    useEffect(() => {
        console.log('User Mount');
        return () => {
            console.log('User Unmount');
        };
    }, []);
    return (
        <View>
            <Text>設定画面</Text>
        </View>
    );
};

export default SettingScreen;