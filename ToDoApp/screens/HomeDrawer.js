import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MessageScreen from './MessageScreen';
import FeedScreen from './FeedScreen';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={FeedScreen} />
            <Drawer.Screen name="Message" component={MessageScreen} />
        </Drawer.Navigator>
    );
}

export default HomeDrawer;