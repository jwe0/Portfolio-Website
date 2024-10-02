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
            <h5>"that's how you turn a 5 hour task into a 1 and a half month task, because i'm a programmer, and that's what we do."</h5>
        </div>
    </div>

</body>