import React, { useState } from 'react'
import FigmaPercentage from './Images/70%.png'
import MernPercentage from './Images/75%.png'
import JsPercentage from './Images/80%.png'
import ReactPercentage from './Images/85%.png'
import NumberOne from './Images/1.png'
import NumberTwo from './Images/2.png'
import NumberThree from './Images/3.png'
import NumberFour from './Images/4.png'
import NumberFive from './Images/5.png'
import NumberSix from './Images/6.png'
import ReactIcon from './Images/react-icon.png'
import ReactNativeIcon from './Images/react-native-icon.png'
import JsIcon from './Images/js-icon.png'
import MernIcon from './Images/mern-small-icon.png'
import MernSmallIcon from './Images/mern-small-icon.png'
import FigmaIcon from './Images/figma-icon.png'
import PhotoshopIcon from './Images/PhotoshopIcon.png'


const SkillsApi=[

    {
            name: "ReactJs",
            numberPic: NumberOne,
            percentagePic: ReactPercentage,
            skillIcon: ReactIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ,
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
    
        {
            name: "JavaScript",
            numberPic: NumberTwo,
            percentagePic: JsPercentage,
            skillIcon: JsIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
        
        {
            name: "Mern",
            numberPic: NumberThree,
            percentagePic: MernPercentage,
            skillIcon: MernIcon,
            skillSmallIcon: MernSmallIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
       
        {
            name: "React Native",
            numberPic: NumberFour,
            percentagePic: MernPercentage,
            skillIcon: ReactNativeIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
       
        {
            name: "Figma",
            numberPic: NumberFive,
            percentagePic: FigmaPercentage,
            skillIcon: FigmaIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
       
        {
            name: "Photoshop",
            numberPic: NumberSix,
            percentagePic: FigmaPercentage,
            skillIcon: PhotoshopIcon,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projects:[
                {
                    name:"Project 1",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

                {
                    name:"Project 2",
                    video:"https://www.youtube.com/embed/6mbwJ2xhgzM" ,
                    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                },

            ]
        },
    ]



export default SkillsApi