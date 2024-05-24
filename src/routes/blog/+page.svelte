<script>
    import { posts } from "$lib/index";
    import { onMount } from "svelte";
    import "/src/style.css";

    let postlist = [];

    function getPosts() {
        postlist = Object.keys(posts).map((key) => posts[key]);
    }

    onMount(getPosts);
</script>

<head>
    <title>Joshua Webb - Blog</title>
</head>

<body>
    <div class="topbar animated-element-1">
        <div class="title">
            <div class="icon">
                <a href="/"
                    ><img
                        src="https://avatars.githubusercontent.com/u/162640629"
                        alt="Logo"
                    /></a
                >
            </div>

            <h1>Joshua Webb</h1>
        </div>
        <div class="top_container">
            <button
                on:click={() =>
                    (window.location.href = "https://only-my.space/jwe0")}
                >Only My Space</button
            >
            <button
                on:click={() =>
                    (window.location.href = "https://app.daily.dev/fbidotgov")}
                >Daily.dev</button
            >
            <button on:click={() => (window.location.href = "/projects")}
                >Projects</button
            >
            <button
                on:click={() =>
                    (window.location.href =
                        "https://play.picoctf.org/users/jwe0")}>Pico Ctf</button
            >
            <button
                on:click={() =>
                    (window.location.href = "https://github.com/jwe0")}
                >Github</button
            >
            <button on:click={() => (window.location.href = "/blog")}
                >Blog</button
            >
            <button on:click={() => (window.location.href = "/contact")}
                >Contact</button
            >
        </div>
    </div>

    <div class="main">
        <h1>Posts</h1>
        <ul class="ul_class" id="blogs">
            {#each postlist as post}
                <li><a href="/blog/{post['title']}">{post["title"]}</a></li>
                <br /><br />
            {/each}
        </ul>
        <div id="tests"></div>
    </div>
</body>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: large;
        padding: 20px;
    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    li a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: white;
        font-size: large;
        padding: 10px 15px;
        border-radius: 5px;
        padding: 10px 100px;
        background-color: rgb(47, 46, 46);
    }

    li a:hover {
        transition-duration: 1s;
        background-color: gray;
    }

    .icon a {
        padding: 0;
    }
</style>
