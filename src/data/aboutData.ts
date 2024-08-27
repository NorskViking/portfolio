// Education Assets
import UiO from "../assets/png/uio_logo.png";
import sandeVGS from "../assets/png/sandevgs.png";
import northview from "../assets/png/northview_highschool_logo.png";
// Work Assets
import groenland from "../assets/png/gronland_bryggeri_logo.png";
import adecco from "../assets/png/adecco_logo.png";
import funkweb from "../assets/png/funkweb_suksess_logo.png";
// Volunteer Assets
import inferno from "../assets/jpeg/Inferno.jpg";
import midgardsblot from "../assets/png/Midgardsblot.png";
import tonsOfRock from "../assets/png/TonsOfRock.png";
import cyb from "../assets/jpeg/CybernetiskSelskab.jpg";
import kshb from "../assets/jpeg/KristianiaStudentenesHaandbryggerlaug.jpg";
import rf from "../assets/png/RealistForeningen.png";
import tt from "../assets/png/Tappetårnet.png";

interface data {
    id: number;
    company?: string;
    title: string;
    description: string;
    startDate?: string;
    endDate?: string;
    year?: number;
    logo?: string;
}

export const educationData: data[] = [
    {
        id: 1,
        title: "Universitetet i Oslo, Oslo, Norge",
        description: "Bachelor i Informatikk",
        startDate: "2011",
        endDate: "2021",
        logo: UiO
    },
    {
        id: 2,
        title: 'Northview HighSchool, Grand Rapids, Michigan, USA',
        description: 'Studiespesialisering, realfag',
        startDate: '2009',
        endDate: '2010',
        logo: northview
    },
    {
        id: 3,
        title: 'Sande Videregående Skole, Sande i Vestfold, Norge',
        description: 'Studiespesialisering, realfag',
        startDate: '2008',
        endDate: '2011',
        logo: sandeVGS
    },
]

export const workData: data[] = [
    {
        id: 1,
        company: 'Funkweb Kompetanse AS',
        title: 'Prosjektleder',
        description: 'Bidrar til å opprette og holde kurs og prosjekter for kandidater ved FunkWeb.',
        startDate: 'Feb. 2024',
        endDate: 'nåværende',
        logo: funkweb
    },
    {
        id: 2,
        company: 'Adecco Bemanning AS',
        title: 'Konsulent',
        description: 'Tre inn i ulike roller etter kundens behov og ønsker.',
        startDate: 'Mai. 2021',
        endDate: 'nåværende',
        logo: adecco
    },
    {
        id: 3,
        company: 'Grønland Bryggeri AS',
        title: 'Bryggerimester',
        description: 'Ansvarlig for utvikling, produksjon og kvalitetssikring av vareporteføljen.',
        startDate: 'Feb. 2019',
        endDate: 'Okt. 2020',
        logo: groenland
    }
]

export const volunteerData: data[] = [
    {
        id: 1,
        title: "Cybernetisk Selskab, Universitetet i Oslo",
        description: "I min tid som frivillig i CYB, jobbet jeg i student kaffeen og baren, og var i en periode valgt inn som Kafèsjef og Barsjef.",
        startDate: "2011",
        endDate: "2018",
        logo: cyb
    },
    {
        id: 2,
        title: "Realistforeningen, Universitetet i Oslo",
        description: "I min tid som frivillig i RF, jobbet jeg som bartender i studentbaren.",
        startDate: "2012",
        endDate: "2018",
        logo: rf
    },
    {
        id: 3,
        title: "Tappetårnet, Universitetet i Oslo",
        description: "I min tid som frivillig i TT, jobbet jeg som bartender, og hadde de siste par årene rolle som Baransvarlig.",
        startDate: "2014",
        endDate: "2018",
        logo: tt
    },
    {
        id: 4,
        title: "Kristiania Studentenes Haandbryggerlaug, Universitetet i Oslo",
        description: "I min tid som frivillig i KSHB, deltok jeg på kurs i hjemmebrygging, og avholdt ølsmakinger for gjester.",
        startDate: "2012",
        endDate: "2016",
        logo: kshb
    },
    {
        id: 5,
        title: "Pre-Prod",
        company: "Midgardsblot Metal Festival",
        description: "Som en del av Pre-Prod, jobbet jeg hovedsakelig med å gjøre klar festivalområde i forveien av selve festivalen.",
        year: 2022,
        logo: midgardsblot
    },
    {
        id: 6,
        title: "Environment",
        company: "Tons of Rock Festival",
        description: "Som en del av miljøgruppen, bidro jeg med å holde festivalområdet ryddig, håndterte og transporterte avfall.",
        year: 2023,
        logo: tonsOfRock
    },
    {
        id: 7,
        title: "DeltaForce",
        company: "Midgardsblot Metal Festival",
        description: "Som en del av DeltaForce, bidro jeg med arbeidsoppgaver relatert til frivillig-campen. Dette gikk ut på å hjelpe frivillige med å registrere og finne teltplass, og holde området ryddig og organisert.",
        year: 2023,
        logo: midgardsblot
    },
    {
        id: 8,
        title: "Pit-Crew",
        company: "Inferno Metal Festival",
        description: "Som en del av Pit-Crew, bidro jeg vektere med ekstra sikkerhet rundt hovedscenen under selve festivalen.",
        year: 2024,
        logo: inferno
    },
    {
        id: 9,
        title: "Pit-Crew",
        company: "Tons of Rock Festival",
        description: "Som en del av Pit-Crew, bidro jeg vektere med ekstra sikkerhet rundt hovedscenen under selve festivalen.",
        year: 2024,
        logo: tonsOfRock
    },
    {
        id: 10,
        title: "DeltaForce",
        company: "Midgardsblot Metal Festival",
        description: "Som en del av DeltaForce, jobbet jeg hovedsakelig med rigging av festivalområde i forveien av selve festivalen.",
        year: 2024,
        logo: midgardsblot
    }
]