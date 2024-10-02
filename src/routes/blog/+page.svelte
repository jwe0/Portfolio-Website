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
        <div class="cool_list">
            {#each blogs as project, i}
                <div class="item" on:click={() => window.location.href = "/blog/" + i}>
                    <h1 class="title">{project.page.title}</h1>
                </div>
            {/each}
        </div>
</body>