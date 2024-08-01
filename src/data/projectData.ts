interface project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    code: string;
    demo: string;
    logo?: void;
}

export const porjectData: project[] = [
    {
        id: 1,
        title: "Raskeladden & Dovreslubben",
        description: "Android mobil spill utviklet i Godot. I utviklingsfasen hadde jeg rollene som Techlead, utvikler og tester",
        tags: ['Github', 'Godot', 'Asana'],
        code: "https://github.com/FunkWeb/spill6",
        demo: "https://funksoft.no/raskeladden/Raskeladden.og.Dovreslubben.html",
    },
    {
        id: 2,
        title: "CodeCademy - Full-stack Engineer",
        description: "En sammling mindre prosjekter utført som en del av full-stack engineer læringsløpet.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: "https://github.com/NorskViking/CodeCademy--Full-stack-Engineer--Course",
        demo: "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path",
    },
    {
        id: 3,
        title: "Rock, Paper Scissor",
        description: "Et Stein, Saks, Papir spillprosjekt, hentet fra frontendmentor.io. Prosjektet er laget med React-Typescript, med TailwindCSS for styling",
        tags: ["React", "TailwindCSS", "Typescript"],
        code: "https://github.com/NorskViking/rock-paper-scissors-master",
        demo: "https://norskviking.github.io/rock-paper-scissors-master/",
    }
]