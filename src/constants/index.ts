// constants.ts

export interface NavLink {
    name: string;
    link: string;
}

export const navLinks: NavLink[] = [
    { name: "Work", link: "#work" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Testimonials", link: "#testimonials" },
];

export interface Word {
    text: string;
    imgPath: string;
}

export const words: Word[] = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

export interface CounterItem {
    value: number;
    suffix: string;
    label: string;
}

export const counterItems: CounterItem[] = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

export interface Logo {
    imgPath: string;
}

export const logoIconsList: Logo[] = [
    { imgPath: "/images/logos/company-logo-1.png" },
    { imgPath: "/images/logos/company-logo-2.png" },
    { imgPath: "/images/logos/company-logo-3.png" },
    { imgPath: "/images/logos/company-logo-4.png" },
    { imgPath: "/images/logos/company-logo-5.png" },
    { imgPath: "/images/logos/company-logo-6.png" },
    { imgPath: "/images/logos/company-logo-7.png" },
    { imgPath: "/images/logos/company-logo-8.png" },
    { imgPath: "/images/logos/company-logo-9.png" },
    { imgPath: "/images/logos/company-logo-10.png" },
    { imgPath: "/images/logos/company-logo-11.png" },
];

export interface Ability {
    imgPath: string;
    title: string;
    desc: string;
}

export const abilities: Ability[] = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

export interface TechStackImg {
    name: string;
    imgPath: string;
}

export const techStackImgs: TechStackImg[] = [
    { name: "React Developer", imgPath: "/images/logos/react.png" },
    { name: "Python Developer", imgPath: "/images/logos/python.svg" },
    { name: "Backend Developer", imgPath: "/images/logos/node.png" },
    { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
    { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

export interface TechStackIcon {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number];
}

export const techStackIcons: TechStackIcon[] = [
    { name: "React Developer", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
    { name: "Python Developer", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
    { name: "Backend Developer", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
    { name: "Interactive Developer", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
    { name: "Project Manager", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

export interface ExpCard {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

export const expCards: ExpCard[] = [
    {
        review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance...",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    // інші карточки...
];

export interface ExpLogo {
    name: string;
    imgPath: string;
}

export const expLogos: ExpLogo[] = [
    { name: "logo1", imgPath: "/images/logo1.png" },
    { name: "logo2", imgPath: "/images/logo2.png" },
    { name: "logo3", imgPath: "/images/logo3.png" },
];

export interface Testimonial {
    name: string;
    mentions: string;
    review: string;
    imgPath: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review: "I can’t say enough good things about Adrian...",
        imgPath: "/images/client1.png",
    },
    // інші відгуки...
];

export interface SocialImg {
    name: string;
    imgPath: string;
}

export const socialImgs: SocialImg[] = [
    { name: "insta", imgPath: "/images/insta.png" },
    { name: "fb", imgPath: "/images/fb.png" },
    { name: "x", imgPath: "/images/x.png" },
    { name: "linkedin", imgPath: "/images/linkedin.png" },
];
