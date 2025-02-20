import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginDetails } from '../../redux/actions/ProductActions';
import { SigninInputFormInterface } from '../../utils/TypeImplements';
const Register = ({navigation}) => {

    const dispatch=useDispatch();
    const products: { allProducts: { loginDetails: SigninInputFormInterface } } = useSelector((state: { allProducts: { loginDetails:SigninInputFormInterface  } }) => state);


    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [formInput, setFormInput] = useState<SigninInputFormInterface>({
        name:"",
        email:"",
        password:""
    })

    const handleSignIn=()=>{
        dispatch(setLoginDetails(formInput))
        navigation.navigate("Home")
    }

    useEffect(() => {
        if (
            products.allProducts.loginDetails.email &&
            products.allProducts.loginDetails.password &&
            products.allProducts.loginDetails.name
          ) {
           navigation.navigate("Home")
          }
    }, [])
    

    return (
        <View style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <View style={{ height: 600, width: "90%", backgroundColor: "#E0E0E0", borderRadius: 20 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 90 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>Sign In</Text>
                </View>
                <View style={{ padding: 10 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Name</Text>
                    <TextInput
                        style={{ backgroundColor: "white", borderRadius: 10,color:"black"}}
                        placeholder="Enter Name"
                        placeholderTextColor={"black"}
                        onChangeText={(text)=>setFormInput((prevState)=>{
                            return{
                                ...prevState,
                                name:text
                            }
                        })}
                    />
                </View>
                <View style={{ padding: 10 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Email</Text>
                    <TextInput
                        style={{ backgroundColor: "white", borderRadius: 10 ,color:"black"}}
                        placeholder="Enter Email"
                        placeholderTextColor={"black"}
                        onChangeText={(text)=>setFormInput((prevState)=>{
                            return{
                                ...prevState,
                                email:text
                            }
                        })}
                    />
                </View>
                <View style={{ padding: 10 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Password</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <TextInput
                            style={{ backgroundColor: "white", borderRadius: 10, width: "90%", marginRight: 15,color:"black" }}
                            placeholder="Enter Password"
                            placeholderTextColor={"black"}
                            secureTextEntry={isPasswordVisible}
                            onChangeText={(text)=>setFormInput((prevState)=>{
                                return{
                                    ...prevState,
                                    password:text
                                }
                            })}

                        />
                        <TouchableOpacity onPress={()=>setIsPasswordVisible(!isPasswordVisible)}>
                            <Icon name={isPasswordVisible?"eye":"eyeo"} size={20} />
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:100}}>
                    <TouchableOpacity onPress={handleSignIn} style={{height:50,width:"95%",backgroundColor:"#8b5ffa",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
                        <Text style={{color:"white",fontSize:20,fontWeight:"bold"}} >Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register