const pages = [
    {
        name: "Home",
        path: "/",
        align: "left"
    },
    {
        name: "About",
        path: "/about",
        align: "left"
    },
    {
        name: "Projects",
        path: "/projects",
        align: "left"
    },
    {
        name: "Socials",
        path: "/socials",
        align: "right"
    },
    {
        name: "Contact",
        path: "/contact",
        align: "right"
    }
]

const projects = [
    {
        info : {
            name: "Osint.Kit",
            url: "https://github.com/jwe0/osint.kit"
        },
        page : {
            title: "Osint.Kit",
            description: "This is an Osint focused tool I developed because I found when I was performing Osint investigations that I constantly needed to download a new tool or visit a website and I prefer working purely from the command line so I created this tool.",
            features : [
                "30+ tools",
                "Easy to use",
                "Open source",
                "Works from the command line",
                "Efficient and fast"
            ]
        }
    },
    {
        info : {
            name : "AutoPen",
            url: "https://github.com/jwe0/AutoPen"
        },
        page : {
            title: "AutoPen",
            description: "This is a tool I developed to automate basic penetration testing like finding protocols, banners, software versions and common file paths.",
            features : [
                "Easy to use",
                "Open source",
                "Automates basic penetration testing"
            ]
        }
    }
]

const socials = [
    {
        name: "OnlyMySpace",
        url: "https://only-my.space/jwe0"
    },
    {
        name: "Daily.Dev",
        url: "https://app.daily.dev/fbidotgov"
    },
    {
        name: "PicoCtf",
        url: "https://play.picoctf.org/users/jwe0"
    },
    {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/jwe0"
    },
    {
        name: "Github",
        url: "https://github.com/jwe0"
    }
]



export { pages, projects, socials}