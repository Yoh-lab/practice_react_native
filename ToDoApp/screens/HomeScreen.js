import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // ReactNativeでは画面が追加されていくので，useEffectの挙動が違う
    // useEffect(() => {
    //     console.log('Home Mount');
    //     return () => {//この処理はこのコンポーネントのクリーンアップ時に実行される
    //         console.log('Home Unmount');
    //     };
    // }, []);

    //Reactの画面遷移と同じ感覚でuseEffectを使いたいなら, useFocusEffectを使う
    // useFocusEffect(
    //     React.useCallback(() => {
    //       console.log('User Focus');

    //       return () => {
    //         console.log('User UnFocus');
    //       };
    //     }, [])
    //   );


    return (
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button title="ユーザ"
                onPress={() =>
                    navigation.navigate('User', {
                        userId: 1,
                    })
                } />
        </View>
    );
}

export default HomeScreen