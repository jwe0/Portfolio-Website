<script>
    import "/src/app.css";
    import { pages} from "$lib/index";
</script>

<head>
    <title>Contact</title>
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
        <h1>Contact</h1>
        <p>Where to contact me</p>
        <div class="socials">
            <a href="mailto:joshuawebb2007@proton.me">joshuawebb2007@proton.me</a>
        </div>
    </div>
</body>