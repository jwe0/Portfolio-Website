<script>
    import "/src/app.css";
    import { pages } from "$lib/index";
    import Typewriter from "svelte-typewriter";
</script>

<head>
    <title>Joshua Webb</title>
</head>

<body>
    <div class="">
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
            <div class="home">
                <h1>Joshua Webb</h1>
                <!-- Typewriter -->
                <Typewriter
                    mode="loop"
                    interval={70}
                    delay={200}
                >
                    <p>Software Development</p>
                    <p>Networking & Security</p>
                    <p>Penetration Testing</p>
                    <p>Climbing</p>
                </Typewriter>
                
                <div class="home_info">
                    <div class="info">
                        <h1>4+ years of experience</h1>
                    </div>
                    <div class="info">
                        <h1>Security + Networking</h1>
                    </div>
                    <div class="info">
                        <h1>Cryptography fanatic</h1>
                    </div>
                </div>
            </div>

        </div>

    </div>

</body>