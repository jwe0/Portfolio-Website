<script>
    import "/src/app.css";
    import { pages, projects } from "$lib/index";
</script>

<head>
    <title>Projects</title>
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
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on</p>
        <div class="cool_list">
            {#each projects as project, i}
            <div class="item" on:click={() => window.location.href = "/projects/" + i}>
                <h1 class="title">{project.info.name}</h1>
                <p class="description">{project.info.shortd}</p>
            </div>
            {/each}
        </div>
</body>