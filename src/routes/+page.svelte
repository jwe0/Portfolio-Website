<script>
    import "/src/app.css";
    import { pages } from "$lib/index";
</script>


<body>
    <div class="dots">
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
            <h1>Joshua Webb</h1>
            <img src="https://github-readme-stats.vercel.app/api?username=jwe0&show_icons=true&theme=tokyonight" alt="GitHub stats">
            <h1>Languages</h1>
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=jwe0&show_icons=true&theme=tokyonight" alt="GitHub stats">
            <h1>Stacks</h1>
            <div class="stacks svelte-muvu6j"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/python.svg" width="50" alt="Python"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="50" alt="Node.js"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg" width="50" alt="Svelte"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg" width="50" alt="HTML"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg" width="50" alt="CSS"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg" width="50" alt="Javascript"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/git.svg" width="130" alt="Git"> <img style="background-color: white;" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/flask.svg" width="50" alt="Flask"> <img style="background-color: white;" src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/rust.svg" width="50" alt="Rust"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/linux-tux.svg" width="50" alt="Linux"> <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/ubuntu.svg" width="50" alt="Ubuntu"></div>
        </div>
    </div>

</body>