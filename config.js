const config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3LXZpbmNlbnQiLCJhIjoiY202OW4wNm5yMGlubzJtcTJmMnBxb2x1cSJ9.jrR3Ucv9Nvtc-T_7aKIQCg',
    CSV: '../data/locations.csv',
    center: [-98.5795, 39.8283], // [lng, lat]
    zoom: 4,
    title: 'Dynamic Heatmaps - Wealth Distribution',
    description: 'Dynamic heatmaps showing wealth distribution across cities',
    sideBarInfo: ["Location_Name"],
    popupInfo: ["Location_Name"],
    polygonLayers: [
        {
            name: "Atlanta",
            file: "data/KMLs/Atlanta.kml"
        },
        {
            name: "Chicago",
            file: "data/KMLs/Chicago.kml"
        },
        {
            name: "Dallas",
            file: "data/KMLs/Dallas.kml"
        },
        {
            name: "Denver",
            file: "data/KMLs/Denver.kml"
        },
        {
            name: "Fort Lauderdale",
            file: "data/KMLs/West_Palm_Beach.kml"
        },
        {
            name: "Fort Worth",
            file: "data/KMLs/Fort_Worth.kml"
        },
        {
            name: "Los Angeles",
            file: "data/KMLs/Los_Angeles.kml"
        },
        {
            name: "Minneapolis",
            file: "data/KMLs/Minneapolis.kml"
        },
        {
            name: "Newark",
            file: "data/KMLs/Newark.kml"
        },
        {
            name: "Philadelhpia",
            file: "data/KMLs/Philadelhpia.kml"
        },
        {
            name: "Phoenix",
            file: "data/KMLs/Phoenix.kml"
        },
        {
            name: "Raleigh",
            file: "data/KMLs/Raleigh.kml"
        },
        {
            name: "San Diego",
            file: "data/KMLs/San_Diego.kml"
        },
        {
            name: "Trenton",
            file: "data/KMLs/Trenton.kml"
        },
        {
            name: "Washington DC",
            file: "data/KMLs/Washington_DC.kml"
        }
        
],
    defaultColors: {
        '250k': {
            '1500+': 'rgba(255, 59, 59, 0.4)',         // Bright red
            '1250-1500': 'rgba(255, 149, 5, 0.4)',    // Orange
            '1000-1250': 'rgba(255, 215, 0, 0.4)',    // Gold/Yellow
            '750-1000': 'rgba(76, 187, 23, 0.4)',     // Bright green
            '500-750': 'rgba(0, 120, 255, 0.4)',      // Sky blue
            '0-500': 'rgba(173, 216, 230, 0.4)'      // Light blue
        },
        '500k': {
            '1500+': 'rgba(102, 0, 153, 0.8)',         // Dark purple
            '1250-1500': 'rgba(186, 85, 211, 0.8)',   // Medium purple
            '1000-1250': 'rgba(220, 20, 60, 0.8)',    // Deep red
            '750-1000': 'rgba(255, 140, 0, 0.8)',     // Dark orange
            '500-750': 'rgba(255, 215, 0, 0.8)',      // Gold
            '0-500': 'rgba(255, 255, 224, 0.8)'      // Light yellow
        }
    }
};
