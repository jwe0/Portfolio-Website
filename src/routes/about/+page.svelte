<script>
    import "/src/app.css";
    import { pages } from "$lib/index";
</script>

<head>
    <title>About</title>
</head>

<body>
    <div class="navbar">
        <ul>
            {#each pages as page}
                {#if page.align == "left"}
                    <li>
                        <a href={page.path}>{page.name}</a>
                    </li>
                {:else}
                    <li class="right">
                        <a href={page.path}>{page.name}</a>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="main">
        <h1>About</h1>
        <div class="boxes">
            <div class="box">
                <div class="title">Digital Literacy</div>
                <p>I have been programming for over 4 years, with intermediate-level knowledge of Python and experience in Rust. I am also familiar with web development frameworks like SvelteKit and possess strong computational thinking skills.</p>
            </div>
            <div class="box">
                <div class="title">Teamwork</div>
                <p>For the past 3 years, I have participated in Chattabox+, where I learned to work effectively in a team. Leading my group during Laser Tag, I organized a strong formation that helped us secure first place, demonstrating my ability to lead and take feedback.</p>
            </div>
            <div class="box">
                <div class="title">Working Under Pressure</div>
                <p>I excel at maintaining focus in high-pressure situations, which allows me to approach tasks logically and effectively. This skill helps me navigate challenges without losing sight of the goal.</p>
            </div>
            <div class="box">
                <div class="title">Problem Solving</div>
                <p>My programming background has honed my problem-solving abilities. I enjoy deconstructing complex problems into manageable parts and often explore multiple solutions to ensure the best outcome.</p>
            </div>
        </div>
        <p>Here are some of the technologies I have used:</p>
        <div class="stacks svelte-muvu6j">
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/python.svg" width="50" alt="Python">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="50" alt="Node.js"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg" width="50" alt="Svelte"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg" width="50" alt="HTML"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg" width="50" alt="CSS"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg" width="50" alt="Javascript"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/git.svg" width="130" alt="Git"> 
            <img style="background-color: white;" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/flask.svg" width="50" alt="Flask"> 
            <img style="background-color: white;" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/rust.svg" width="50" alt="Rust"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/linux-tux.svg" width="50" alt="Linux"> 
            <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/ubuntu.svg" width="50" alt="Ubuntu">
        </div>
        <p>My GitHub rating</p>
        <img src="https://github-readme-stats.vercel.app/api?username=jwe0&show_icons=true&theme=tokyonight" alt="GitHub stats">
        <p>My most used languages</p>
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=jwe0&show_icons=true&theme=tokyonight" alt="GitHub stats">
    </div>
</body>