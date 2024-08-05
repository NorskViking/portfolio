import inferno from "../assets/jpeg/Inferno.jpg";
import midgardsblot from "../assets/png/Midgardsblot.png";
import tonsOfRock from "../assets/png/TonsOfRock.png";

interface data {
    id: number;
    company?: string;
    title: string;
    description: string;
    startDate?: string;
    endDate?: string;
    logo?: string;
}

export const educationData: data[] = [
    {
        id: 1,
        title: "Universitetet i Oslo, Oslo, Norge",
        description: "Bachelor i Informatikk",
        startDate: "2011",
        endDate: "2021"
    },
    {
        id: 2,
        title: 'Northview HighSchool, Grand Rapids, Michigan, USA',
        description: 'Studiespesialisering, realfag',
        startDate: '2009',
        endDate: '2010',
    },
    {
        id: 3,
        title: 'Sande Videregående Skole, Sande i Vestfold, Norge',
        description: 'Studiespesialisering, realfag',
        startDate: '2008',
        endDate: '2011',
    },
]

export const workData: data[] = [
    {
        id: 1,
        company: 'Funkweb Kompetanse AS',
        title: 'Prosjektleder',
        description: 'Bidrar til å opprette og holde kurs og prosjekter for kandidater ved FunkWeb.',
        startDate: 'Feb. 2024',
        endDate: 'nåværende'
    },
    {
        id: 2,
        company: 'Adecco Bemanning AS',
        title: 'Konsulent',
        description: 'Tre inn i ulike roller etter kundens behov og ønsker.',
        startDate: 'Mai. 2021',
        endDate: 'nåværende'
    },
    {
        id: 3,
        company: 'Grønland Bryggeri AS',
        title: 'Bryggerimester',
        description: 'Ansvarlig for utvikling, produksjon og kvalitetssikring av vareporteføljen.',
        startDate: 'Feb. 2019',
        endDate: 'Okt. 2020'
    }
]

export const volunteerData: data[] = [
    {
        id: 1,
        title: "Cybernetisk Selskab, Universitetet i Oslo",
        description: "",
        logo: inferno
    },
    {
        id: 2,
        title: "Realistforeningen, Universitetet i Oslo",
        description: "",
        logo: inferno
    },
    {
        id: 3,
        title: "Tappetårnet, Universitetet i Oslo",
        description: "",
        logo: inferno
    },
    {
        id: 4,
        title: "Pre-Prod - Midgardsblot Metal Festival 2022",
        description: "",
        logo: inferno
    },
    {
        id: 5,
        title: "Environment - Tons of Rock Festival 2023",
        description: "",
        logo: tonsOfRock
    },
    {
        id: 6,
        title: "DeltaForce - Midgardsblot Metal Festival 2023",
        description: "",
        logo: midgardsblot
    },
    {
        id: 7,
        title: "Pit-Crew - Inferno Metal Festival 2024",
        description: "",
        logo: inferno
    }
]