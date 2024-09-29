<script>
    import "/src/app.css";
    import { pages } from "$lib/index";
</script>

<head>
    <title>Joshua Webb</title>
</head>

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
            <p>16 year old software engineer</p>
        </div>
    </div>

</body>