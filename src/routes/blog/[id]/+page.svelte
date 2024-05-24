<script>
    import { page } from "$app/stores";
    import { posts } from "$lib/index";
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

    <h1>{posts[$page.params.id]["title"]}</h1>

    {@html posts[$page.params.id]["textContent"]}
</body>

<style>

</style>
