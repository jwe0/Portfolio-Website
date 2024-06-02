<script>
    import "/src/style.css";
    import { pages } from "$lib/index";
    import { socials } from "$lib/index";
</script>

<head>
    <title>Joshua Webb</title>
</head>

<body>
    <div class="topbar animated-element-1">
        <div class="title">
            <a href="/"
                ><img
                    src="https://avatars.githubusercontent.com/u/162640629"
                    alt="Logo"
                /></a
            >

            <h1>Joshua Webb</h1>
        </div>
        <div class="top_container">
            {#each pages as page}
                <button on:click={() => (window.location.href = page.url)}
                    >{page.name}</button
                >
            {/each}
        </div>
    </div>

    <div class="main animated-element-2">
        <div class="main">
            <ul>
                {#each socials as social}
                    <li on:click={() => (window.location.href = social.url)}>
                        {social.name}
                    </li>
                    <br />
                {/each}

                <div></div>
            </ul>
        </div>
    </div></body
>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: large;
        padding: 20px;
    }

    li {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid white;
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        width: 600px;
        text-align: center;
    }

    li:hover {
        background-color: rgb(47, 46, 46);
        animation: up-bump 0.5s ease-in-out;
    }
</style>
