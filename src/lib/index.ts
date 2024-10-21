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
    },
    {
        name: "Blog",
        path: "/blog",
        align: "left"
    }
]

const projects = [
    {
        info : {
            name: "Osint.Kit",
            url: "https://github.com/jwe0/osint.kit",
            shortd: "Osint toolkit"
        },
        page : {
            title: "Osint.Kit",
            description: "This is an Osint focused tool I developed because I found when I was performing Osint investigations that I constantly needed to download a new tool or visit a website and I prefer working purely from the command line so I created this tool.",
            elements : [
                {
                    type: "image",
                    url: "/osintkit.png",
                    alt : "Osint.Kit",
                    height: "300px"
                }
            ],
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
            url: "https://github.com/jwe0/AutoPen",
            shortd: "Automated penetration testing tool"
        },
        page : {
            title: "AutoPen",
            description: "This is a tool I developed to automate basic penetration testing like finding protocols, banners, software versions and common file paths.",
            elements : [
                
            ],
            features : [
                "Easy to use",
                "Open source",
                "Automates basic penetration testing"
            ]
        }
    }
]

const blogs = [
    {
        info: {
            name: "Welcome!",
            date: "2024-09-28"
        },
        page : {
            title : "Welcome!",
            description : "This is my personal blog. I will be adding new posts as I learn more about web development and programming. Stay tuned!",
            elements : [
                {
                    type: "text",
                    title : "Random code",
                    content: "Have some random code so I can test the code feature"
                },
                {
                    type: "code",
                    content: "print('Hello World!')"
                }
            ]
        }
    },
    {
        info: {
            name: "My favorite function I've ever made",
            date: "2024-09-30"
        },
        page : {
            title : "My favorite function I've ever made",
            description : "There is a certain format I love when it comes to CLIs and it is surprisingly difficult to achieve.",
            elements : [
                {
                    type: "text",
                    title : "The concept",
                    content: "In simple, I love when in user interfaces with multiple options that the index of it is on the left and it goes down from 1-10 then the next column is 11-20 etc. I also like it when everything is padded correctly. Like this:"
                },
                {
                    type: "image",
                    url: "/osintkit.png",
                },
                {
                    type: "paragraph",
                    content: "This may look simple but by default it goes 1-10 in rows not columns so I had to sort the options into an array in chunks of 10 then print all the columns first row at the same time then all the columns second row at the same time etc"
                },
                {
                    type: "code",
                    content: `def columnit(array, size=10):
    def style(array):
        results = []
        for ar in array:
            results.append(f"[{array.index(ar) + 1}] {ar}")
        return results
    def pad(array, size=10):
        while len(array) % size != 0:
            array.append(" ")
        return array
    def gen_pad(array):
        results = []
        for ar in array:
            pad = max(len(x) for x in ar)
            sub = []
            for x in ar:
                sub.append(x.ljust(pad))
            results.append(sub)
        return results
    array = pad(style(array), size)
    result = []
    message = ""
    for i in range(0, len(array), size):
        result.append(array[i:i + size])
    sub = ""
    result = gen_pad(result)
    for i in range(len(result[0])):
        for j in range(len(result)):
            if j > 0:
                sub += f" {Fore.LIGHTBLACK_EX}|{Fore.RESET} "
            sub += result[j][i]
        message += sub + "\\n"
        sub = ""
    return message`
            },
            {
                type: "text",
                title: "Array styling",
                content: "The first step was to add the index to each item before sorting."
            },
            {
                type: "code",
                content: `    def style(array):
        results = []
        for ar in array:
            results.append(f"[{array.index(ar) + 1}] {ar}")
        return results`
            },
            {
                type: "text",
                title: "Padding",
                content: "The next step was to pad each column to the same length using modulo operators."
            },
            {
                type: "code",
                content: `    def pad(array, size=10):
        while len(array) % size != 0:
            array.append(" ")
        return array`
            },
            {
                type: "text",
                title: "Padding generator",
                content: "The final step was to create a padding function to generate the padding for each column so everything was aligned nicely."
            },
            {
                type: "code",
                content: `    def gen_pad(array):
        results = []
        for ar in array:
            pad = max(len(x) for x in ar)
            sub = []
            for x in ar:
                sub.append(x.ljust(pad))
            results.append(sub)
        return results`
            },
            {
                type: "text",
                title: "Column generator",
                content: "The final step was to create a function to generate the columns for each row by reading each columns first row then the second row and so on."
            },
            {
                type: "code",
                content : `    sub = ""
    result = gen_pad(result)
    for i in range(len(result[0])):
        for j in range(len(result)):
            if j > 0:
                sub += f" {Fore.LIGHTBLACK_EX}|{Fore.RESET} "
            sub += result[j][i]
        message += sub + "\\n"
        sub = ""`
            },
            {
                type: "text",
                title: "Result",
                content: "The result was a clean and neat table."
            },
            {
                type: "image",
                url: "/osintkit.png",
            }
            ]
        }
    },
    {
        info: {
            name: "How git repositories can Dox you.",
            date: "2024-09-28"
        },
        page : {
            title: "How git repositories can Dox you.",
            description : "In this post I show how git repositories can lead to your dox.",
            elements : [
                {
                    type: "text",
                    title: "How does it work?",
                    content: "All git repositories contain a Git log that can be accessed with the command `git log`. When your first make a push using the git client it requires your email address, this is a legitmate feature that allows collaboraters to contact the member of a certain push if needed. However an email address can allow an attacker to check your email in a data breach and possibly gain access to your email."
                },
                {
                    type: "code",
                    content : "git log | grep @ | cut -d' ' -f3 | tr -d '><'"
                },
                {
                    type: "paragraph",
                    content : "The result"
                },
                {
                    type: "code",
                    content: `jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
jwe0@epic.x
Webb
Webb
Webb
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
jwe0@fbi.gov
`
                },                
                {
                    type: "paragraph",
                    content: "As you can see this clearly shows all the emails in your repository. An attacker could check what websites the email is connceted to and search your email in a database and then attempt the resulting password on multiple websites."
                },
                {
                    type: "text",
                    title: "The solution",
                    content : "Thankfully this is very easy to circumvent by using an email mask or providing an email dedicated to complaints and push requests."
                }
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

const badges = [
    {
        name : "First 4",
        url : "https://assets.tryhackme.com/img/badges/firstfour.svg"
    },
    {
        name : "Linux",
        url : "https://assets.tryhackme.com/img/badges/linux.svg"
    },
    {
        name : "Webbed",
        url : "https://assets.tryhackme.com/img/badges/webbed.svg"
    },
    {
        name : "WWW",
        url : "https://assets.tryhackme.com/img/badges/howthewebworks.svg"
    },
    {
        name : "MrRobot",
        url : "https://assets.tryhackme.com/img/badges/mrrobot.svg"
    },
    {
        name : "OhSint",
        url : "https://assets.tryhackme.com/img/badges/ohsint.svg"
    }
]

const stacks = [
    {
        name : "Python",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/python.svg",
        width : 50
    },
    {
        name : "Node.js",
        url : "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        width : 50
    },
    {
        name : "Svelte",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg",
        width : 50
    },
    {
        name : "HTML",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg",
        width : 50
    },
    {
        name : "CSS",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg",
        width : 50
    },
    {
        name : "JavaScript",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg",
        width : 50
    },
    {
        name : "Git",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/git-icon.svg",
        width : 50
    },
    {
        name : "Flask",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/flask.svg",
        width : 50
    },
    {
        name : "Rust",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/rust.svg",
        width : 50
    },
    {
        name : "Linux",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/linux-tux.svg",
        width : 50
    },
    {
        name : "Ubuntu",
        url : "https://raw.githubusercontent.com/get-icon/geticon/master/icons/ubuntu.svg",
        width : 50
    }
] 

export { pages, projects, socials, blogs, badges, stacks }