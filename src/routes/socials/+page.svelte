<script>
    import "/src/app.css";
    import { pages, socials } from "$lib/index";
</script>

<head>
    <title>Socials</title>
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
        <h1>Socials</h1>
        <p>Here are some of the sites you can find me on</p>
        <div class="socials">
            {#each socials as social}
                <a href={social.url}>{social.name}</a>
            {/each}
        </div>
    </div>
</body>