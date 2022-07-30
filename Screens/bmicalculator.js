import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {NativeBaseProvider,Input,Icon,Stack,IconButton,Link,HStack, Select,Radio, Center} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { auth } from '@react-native-firebase/auth';


const bmicalculatorr= () => {
    const [height, setheight] = useState(0);
    const [weight, setweight] = useState(0);
    const [bmi, setbmi] = useState(" ");
    const [bmiText, setbmiText] = useState(" ");
    const [heightUnit, setheightUnit] = useState("Feet.Inch");
    const [weightUnit, setweightUnit] = useState("Kg");
    const [value, setValue] = React.useState("Male");
    console.disableYellowBox = true;
    
    try{
  
      firestore().collection('bmi').add({
        height:height,
        weight:weight,
        value: value,
        bmi:bmi,
        bmiText:bmiText
      })
      console.log('BMI information added');
      
      }
      catch(error){
        console.log('Error');
        }
  
    function calculatebmi(lbs, ins)
    
{
  

   let h2 = (ins) * (ins);
   let bmi = (lbs)/h2 * 703

  
   
   if (bmi < 18.5) {
      setbmiText('Underweight')
    } else if (bmi >= 18.5 && bmi < 25) {
      setbmiText('Normal Weight')
    } else if (bmi >= 25 && bmi < 30){
      setbmiText('Overweight')
    }
    else{
      setbmiText('Obesity')
    }

   return bmi.toFixed();

}

function changes(weightt, weighttType, heightt, heighttType){
    var weighttChange = weightt;
    var heighttChange = heightt;
    if(isNaN(weighttChange) || weighttChange <=0){
    
  alert("Enter Valid Value For -> Weight"); 
  return "Not Valid Input"
    }
    else if(isNaN(heighttChange) || heighttChange <=0){
    
  alert("Enter Valid Value For -> Height");
  return "Not Valid Input"
    }
    else{
    if(weighttType == "Kg"){
        weighttChange = weightt * 2.20462;
    }
    
    if(heighttType == "Feet.Inch"){
        heighttChange = (parseInt(heightt)*12)+((heightt - parseInt(heightt))*10);
    }
    if(heighttType == "cm"){
        const p = heightt/2.54;
    }
    
    return calculatebmi(weighttChange,heighttChange);}
    
}




    return(
        <NativeBaseProvider> 
           <ImageBackground 
           source={require('../assests/whitebg.jpg')}
           style={{flex:1}} >
           
           
       <View style={{ alignItems: 'center',justifyContent: 'center'}}>
      
        <Stack space={5} style={{paddingTop:50}}>
         
        <Text style={{fontSize:30, fontWeight:'bold', color:'black',paddingLeft:30, color:'black'}}>BMI Calculator</Text>
        <View style={{flexDirection:'row', width:200, alignItems:'center', justifyContent:'center', paddingLeft:60}} >
        <Image
          source={require('../assests/male.jpg')}
          style={{ width: 140, height: 140 }}
        />

        <Image
          source={require('../assests/female.png')}
          style={{ width: 150, height: 150 }}
        />
        </View>
       
        <Radio.Group defaultValue="1" name="myRadioGroup" style={{flexDirection:'row'}} onChange={nextValue => {
    setValue(nextValue);
  }}>
        <Radio value="Male"  >
       <Text style={{paddingLeft:10}}>Male</Text> 
      </Radio>
      <View style={{paddingLeft:110}}>
      <Radio value="Female">
      <Text style={{paddingLeft:10}}>Female</Text> 
      </Radio>
      </View>
      </Radio.Group>
     

      
         <View style={{flexDirection:'row', width:200, alignItems:'center', justifyContent:'center', marginLeft:25}} >
         
        <Input  w={{base: '75%', md: '25%',}}
          alignItems={'center'}
          justifyContent={'center'}
          placeholder= {"Enter Height in \n"+ heightUnit } 
          marginRight={'5'}
          backgroundColor={'#f2f2f2'}
          placeholderTextColor={'#807b7a'}
          onChangeText={(text) => {
            setheight(parseFloat(text));
          }}
          
          InputRightElement={
              
            <Select width={10} height={120} onValueChange={(itemValue) => setheightUnit(itemValue)} bgColor={'#f2f2f2'} >
            <Select.Item label="cm" value="cm" />
            <Select.Item label="Feet.Inch" value="Feet.Inch" />
            
            </Select>
          }
       
          />
        
        <Input  w={{base: '75%', md: '25%',}}
          
          placeholder= {"Enter Weight in \n"+ weightUnit } 
          backgroundColor={'#f2f2f2'}
          placeholderTextColor={'#807b7a'}
          onChangeText={(text) => {setweight(parseFloat(text));}}

          InputRightElement={
              
            <Select width={10} height={120} onValueChange={(itemValue) => setweightUnit(itemValue)} bgColor={'#f2f2f2'} >
            <Select.Item label="kg" value="kg" />
            <Select.Item label="lbs" value="lbs" />
            
            </Select>
          }
         /> 
        </View>

        </Stack>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#313b94',
            padding: 10,
            marginTop: 20,
            width: 200,
            height:50,
            borderRadius:40, marginTop:40}}
            
             onPress={() => {
          setbmi("BMI = " + changes(weight, weightUnit , height, heightUnit));}}
          >
          <Text style={{flex:1,fontWeight:'bold', alignItems:'center', justifyContent:'center', fontSize:17, color:'white', paddingTop:2}}>Calculate</Text>
         
        
        </TouchableOpacity>
        <Text style={{textAlign: "center",fontSize: 22,fontWeight: "bold", marginTop: 15, lineHeight: 35}}>{bmi}</Text>
        <Text style={{textAlign:'center', fontSize:20, color:'green', fontWeight:'bold'}}>{bmiText}</Text>
        
       </View>

       
      </ImageBackground>
   </NativeBaseProvider>
    );
}

export default bmicalculatorr;










