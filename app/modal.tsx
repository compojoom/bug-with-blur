import {Text, StyleSheet, Pressable} from "react-native";
import React from 'react';
import {Link, useRouter} from "expo-router";
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';



export default function Modal() {
    const router = useRouter()
    return (
        <Animated.View
            entering={FadeIn}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000040',
            }}
        >
            {/* Dismiss modal when pressing outside */}
            <Link href={'../'} asChild>
                <Pressable style={StyleSheet.absoluteFill} />
            </Link>
            <Animated.View
                entering={SlideInDown}
                style={{
                    width: '90%',
                    height: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Modal Screen</Text>
                <Pressable onPress={() => router.back()}>
                    <Text>
                        <Text>← Go back</Text>
                    </Text>
                </Pressable>
            </Animated.View>
        </Animated.View>
    );
}
