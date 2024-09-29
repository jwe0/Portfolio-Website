<script>
    import "/src/app.css";
    import { pages, blogs } from "$lib/index";
</script>

<head>
    <title>Blogs</title>
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
        <h1>blogs</h1>
        <p>Here are some of the blogs I have worked on</p>
        <div class="socials">
            {#each blogs as project, i}
                <a href="/blog/{i}">{project.info.name}</a>
            {/each}
        </div>
</body>