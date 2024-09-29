<script>
    import "/src/app.css";
    import { pages, projects } from "$lib/index";
</script>


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
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on</p>
        <div class="socials">
            {#each projects as project, i}
                <a href="/projects/{i}">{project.info.name}</a>
            {/each}
        </div>
</body>