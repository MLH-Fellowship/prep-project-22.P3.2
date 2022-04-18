import {React, useState} from 'react';
import './style.css';


export default function ToggleWeather(props) {

    const [Celsius, setCelsius] = useState(0)
    const [Ferenheit, setFerenheit] = useState(0)
    const [Kelvin, setKelvin] = useState(0)

    const CtoF = (temperature) => {
        return (temperatur * (9/5)) + 32
    }
    const FtoC = (temperature) => {
        return (temperatur - 32)*(5 / 9);
    }
    const CtoK = (temperature) => {
        return (temperatur + 273.15);
    }
    // testing the btn
    const handelchange = () => {
        console.log("hello world");
    }
    
//   to convert celcium to ferenheit to kelvin and vice versa 
    const handelCtoF = () => {
        setCelsius(CtoF(props.celsius))
        setFerenheit(props.celsius)
    }
    const handelFtoC = () => {
        setFerenheit(FtoC(props.ferenheit))
        setCelsius(props.ferenheit)
    }
    const handelCtoK = () => {
        setCelsius(CtoK(props.celsius))
        setKelvin(props.celsius)
    }
    const handelKtoC = () => {
        setKelvin(props.celsius - 273.15)
        setCelsius(props.celsius - 273.15)
    }
    const handelFtoK = () => {
        setFerenheit(CtoK(props.ferenheit))
        setKelvin(props.ferenheit)
    }
    const handelKtoF = () => {
        setKelvin(props.celsius - 273.15)
        setFerenheit(props.celsius - 273.15)
    }

    

    return (
        <section className='togglebtn'> 
           
            <label class="rad-label">
                <input type="radio" class="rad-input" name="rad"/>
                <div class="rad-design"></div>
                <div class="rad-text">Celsius</div>
            </label>
            <label class="rad-label">
                <input type="radio" class="rad-input" name="rad"/>
                <div class="rad-design"></div>
                <div class="rad-text">Kelvin</div>
            </label>
            <label class="rad-label">
                <input type="radio" class="rad-input" name="rad"/>
                <div class="rad-design"></div>
                <div class="rad-text">Ferenheit</div>
            </label>
               
        </section>
      
  
    )
}

