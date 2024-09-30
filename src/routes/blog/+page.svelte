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
        <h1>Blogs</h1>
        <p>This is a list of my blogs</p>
        <div class="blogs">
            {#each blogs as project, i}
                <a href="/blog/{i}">
                    <p style="float: right;">{i + 1}</p>
                    <p style="float: left;">{project.info.name}</p>
                </a>
            {/each}
        </div>
</body>