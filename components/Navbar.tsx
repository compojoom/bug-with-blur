import { BlurredIdenticonBackground } from './BlurredIdenticonBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export const Navbar = () => {

    return (
        <View style={{
            height: 200
        }}>
            <BlurredIdenticonBackground address={"0x776Be428BAf003F6501A04Ac546e70e47a8d90F1"}>
                <SafeAreaView style={[styles.headerContainer]}>


                    <Link href="/modal">
                        <Text>test</Text>
                    </Link>


                </SafeAreaView>
            </BlurredIdenticonBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 16,
        paddingBottom: 0,
    },
})
