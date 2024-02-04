import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './screens/HomeTabs';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import HomeDrawer from './screens/HomeDrawer';

// 参考サイト
// https://reffect.co.jp/react/react-navigation


// テンプレート1：Stackによる画面遷移がベースの場合
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteNameで初期画面を選択 */}
      <Stack.Navigator initialRouteName="Home">
        {/* テンプレート1.a シンプルなホーム画面 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* テンプレート1.b タブ付きのホーム画面 */}
        {/* <Stack.Screen name="Home" component={HomeTabs}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* テンプレート1.c サイドバー？付きホーム画面 */}
        <Stack.Screen name="Home" component={HomeDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="User"
          component={UserScreen}
          options={({ route }) => (
            {
              title: `ユーザID${route.params.userId}の画面`,
            })}
        //  ヘッダーをつけたくない場合
        //  options={{ headerShown: false }}
        />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// テンプレート2：Tabによる画面遷移がベースの場合
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="User" component={UserScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }