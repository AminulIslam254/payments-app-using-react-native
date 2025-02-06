import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { topupIcon } from '../../utils/ImageList';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

    const { width } = Dimensions.get('window');

    const sliderData = [
        { title: 'Slide 1', color: '#FF5733' },
        { title: 'Slide 2', color: '#33FF57' },
        { title: 'Slide 3', color: '#3357FF' },
    ];

    const renderItem = ({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.color }]}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <ScrollView >
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }} >Features</Text>
                        <View style={{ display: "flex", flexDirection: "column", marginTop: 20 }} >
                            <View style={{ height: 90, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        Top up
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text >
                                        Pay
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        Transfer
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        Eshopping
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: 90, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        Bills
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text >
                                        Games
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        Charity
                                    </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                                    <TouchableOpacity>
                                        <Image source={topupIcon} style={{ height: 55, width: 55 }} />
                                    </TouchableOpacity>
                                    <Text>
                                        More
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Promo</Text>
                        <View style={{marginBottom:30}}></View>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <View style={styles?.carauselContainer}>
                                <Carousel
                                    data={sliderData} // Data for each slide
                                    renderItem={renderItem} // Render function for each slide
                                    width={width} // Set the width of the carousel
                                    height={200} // Set the height of each carousel item
                                    // Optional props for carousel behavior
                                    loop={true} // Enable looping through the slides
                                    autoPlay={true} // Enable auto play of the slides
                                    autoPlayInterval={3000} // Set auto play interval (3 seconds)
                                    onSnapToItem={(index) => console.log('Current index:', index)} // Callback when a slide is selected
                                />
                            </View>
                        </GestureHandlerRootView>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    carauselContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;