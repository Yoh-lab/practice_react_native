import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import FeedScreen from './FeedScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen}
                //タブのアイコンを設定する時にはoptionsを使う
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    //  ヘッダーをつけたくない場合
                    // headerShown: false
                }}
            />
            <Tab.Screen name="Messages" component={MessageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabs;