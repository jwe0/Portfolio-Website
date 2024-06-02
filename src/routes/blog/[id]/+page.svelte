<script>
    import { page } from "$app/stores";
    import { posts, pages } from "$lib/index";

</script>

<head>
    <title>Joshua Webb</title>
</head>

<body>
    <div class="topbar">
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

    <h1 class="blog_title">{posts[$page.params.id]["title"]}</h1>

    <div class="blog">
        {@html posts[$page.params.id]["textContent"]}
    </div></body
>

<style>
    .blog {
        color: rgb(175, 175, 175);
        background-color: rgb(55, 55, 55);
        width: 600px;
        padding: 20px;
        border-radius: 10px;
        margin: 20px;
    }

    .blog_title {
        color: rgb(255, 255, 255);
        background-color: rgb(55, 55, 55);
        border-radius: 10px;
        padding: 20px 50px;
        margin: 20px;
    }

    .codeblock {
        background-color: rgb(56, 56, 56);
        color: black;
        padding: 20px;
        border-radius: 10px;
        margin: 20px;
    }
</style>
