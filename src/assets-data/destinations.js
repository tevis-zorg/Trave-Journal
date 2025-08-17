import mtFuji from '../assets/mount-fuji-8010752_640.jpg'
import operaHouse from '../assets/opera-house-4826177_640.jpg'
import geiRanger from '../assets/norway-7427120_640.jpg'

const fujiLoc = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu";
const operaHouseLoc = "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu";
const geiRangerLoc = "https://www.google.com/maps/place/Geirangerfjord/@62.1048242,6.9922377,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D";

const destinationProps= [
    {
        id:1,
        country: "Mount Fuji",
        image: mtFuji,
        location: fujiLoc,
        description: "Mount Fuji is the highest mountain in Japan, standing at 3,776 meters"
    },
    {
        id:2,
        country: "Sydney Opera House",
        image: operaHouse,
        location: operaHouseLoc,
        description: "The Sydney Opera House is a multi-venue performing arts center in Sydney, Australia"
    },
    {
        id:3,
        country: "Geirangerfjord",
        image: geiRanger,
        location: geiRangerLoc,
        description: "The Geirangerfjord is a fjord in the western part of"
    },
    {
        id:4,
        country: "Tuvalu",
        image: tuvalu,
        location: "https://www.google.com/maps/place/Tuvalu/@8.6333333",
        description: "Tuvalu is a small island nation located in the Pacific Ocean"
    }
]

export default destinationProps;