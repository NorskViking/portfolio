import BootstrapOriginalWordmark from "devicon/icons/bootstrap/bootstrap-original-wordmark.svg";
import CsharpOriginal from "devicon/icons/csharp/csharp-original.svg";
import Css3OriginalWordmark from "devicon/icons/css3/css3-original-wordmark.svg";
import PythonOriginalWordmark from "devicon/icons/python/python-original-wordmark.svg";
import DjangoPlain from "devicon/icons/django/django-plain-wordmark.svg";
import DotNetOriginalWordmark from "devicon/icons/dot-net/dot-net-original-wordmark.svg";
import ExpressOriginal from "devicon/icons/express/express-original-wordmark.svg";
import FigmaOriginal from "devicon/icons/figma/figma-original.svg";
import GithubOriginalWordmark from "devicon/icons/github/github-original-wordmark.svg";
import GodotOriginalWordmark from "devicon/icons/godot/godot-original-wordmark.svg";
import Html5OriginalWordmark from "devicon/icons/html5/html5-original-wordmark.svg";
import JavaOriginalWordmark from "devicon/icons/java/java-original-wordmark.svg";
import JavascriptOriginal from "devicon/icons/javascript/javascript-original.svg";
import NodejsOriginalWordmark from "devicon/icons/nodejs/nodejs-original-wordmark.svg";
import PostgresqlOriginalWordmark from "devicon/icons/postgresql/postgresql-original-wordmark.svg";
import ReactOriginalWordmark from "devicon/icons/react/react-original-wordmark.svg";
import SqliteOriginalWordmark from "devicon/icons/sqlite/sqlite-original-wordmark.svg";
import TypescriptOriginal from "devicon/icons/typescript/typescript-original.svg";
import MysqlOriginalWordmark from "devicon/icons/mysql/mysql-original-wordmark.svg";
import WordpressOriginal from "devicon/icons/wordpress/wordpress-original.svg";

interface skills {
    id: string;
    logo: string;
    level?: number
}

export const skillsData: skills[] = [
    {
        id: 'HTML5',
        logo: Html5OriginalWordmark
    },
    {
        id: 'CSS',
        logo: Css3OriginalWordmark
    },
    {
        id: 'Java',
        logo: JavaOriginalWordmark
    },
    {
        id: 'JavaScript',
        logo: JavascriptOriginal
    },
    {
        id: 'Typescript',
        logo: TypescriptOriginal
    },
    {
        id: 'Node JS',
        logo: NodejsOriginalWordmark,
        level: 3.5
    },
    {
        id: 'React',
        logo: ReactOriginalWordmark,
        level: 4
    },
    {
        id: 'Express',
        logo: ExpressOriginal,
        level: 2.5
    },
    {
        id: 'Python',
        logo: PythonOriginalWordmark,
        level: 2.5
    },
    {
        id: 'Django',
        logo: DjangoPlain,
        level: 2.5
    },
    {
        id: 'Bootstrap',
        logo: BootstrapOriginalWordmark,
        level: 2.5
    },
    {
        id: 'Godot',
        logo: GodotOriginalWordmark,
        level: 3
    },
    {
        id: 'PostgreSQL',
        logo: PostgresqlOriginalWordmark,
        level: 3
    },
    {
        id: 'SQLite',
        logo: SqliteOriginalWordmark,
        level: 2.5
    },
    {
        id: 'MySQL',
        logo: MysqlOriginalWordmark,
        level: 2.5
    },
    {
        id: 'Github',
        logo: GithubOriginalWordmark,
        level: 4
    },
    {
        id: 'Csharp',
        logo: CsharpOriginal,
        level: 2
    },
    {
        id: 'DotNet',
        logo: DotNetOriginalWordmark,
        level: 2
    },
    {
        id: 'Figma',
        logo: FigmaOriginal,
        level: 2
    },
    {
        id: 'WordPress',
        logo: WordpressOriginal,
        level: 2.5
    }
]
