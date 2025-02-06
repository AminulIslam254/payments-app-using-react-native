import React from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Services = () => {

    const servicesData = [
        { title: "Business Advisory", description: "Strategic guidance tailored to optimize operations, enhance growth, and navigate challenges for sustainable success." },
        { title: "Real Estate Advisory", description: "Expert insights to facilitate informed decisions, maximize asset value, and navigate complex real estate transactions." },
        { title: "Financial Advisory", description: "Data-driven analysis and personalized strategies to optimize investment portfolios and capitalize on market opportunities." },
        { title: "Website Development", description: "Comprehensive website development services to build user-friendly, responsive, and high-performing websites that enhance your online presence and drive business growth." },
        { title: "Graphics Designing", description: "Creative graphic design solutions that capture your brand’s essence and engage your audience, from logos and brochures to social media graphics and marketing materials." },
        { title: "Content Writing", description: "Professional content writing services to create compelling, SEO-optimized content that resonates with your target audience and strengthens your brand’s voice across all platforms." },
    ]

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <ScrollView >
                    <View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",padding:10,justifyContent:"center",backgroundColor:"#64ebf5"}} >
                        {servicesData.map((val, ind) => {
                            return (
                                <View key={ind} style={{ height: 300, width: 300, borderWidth: 1,marginBottom:10,display:"flex",flexDirection:"column",backgroundColor:"#FB6060" }}>
                                    <Text style={{fontWeight:"bold",marginBottom:10,fontSize:20,textAlign:"center",color:"white"}} >{val.title}</Text>
                                    <Text style={{fontSize:15}} >{val.description}</Text>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

});

export default Services