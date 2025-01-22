import {Image, StyleSheet, Platform, Pressable, Text} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Link, useRouter} from "expo-router";
import {BlurView} from "expo-blur";
import {Navbar} from "@/components/Navbar";

export default function HomeScreen() {
    const router = useRouter()
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={<Navbar/>}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText>Just open the modal then press go back couple of times.</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <Link href={"/modal"}>
                    <ThemedText>Open Modal</ThemedText>
                </Link>
                <Pressable onPress={() => {
                    router.navigate("/modal")
                }}>
                    <ThemedText>Open modal with pressable</ThemedText>
                </Pressable>

            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 150,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
