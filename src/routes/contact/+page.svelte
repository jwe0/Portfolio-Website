<script>
    import "/src/style.css";
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

    <div class="main animated-element-2">
        <h1>Contact information</h1>
        <p>Email</p>
        <ul>
            <li>joshuawebb2007@proton.me (preffered)</li>
            <li>joshuawebb2007@icloud.com (not preffered)</li>
            <li>jwe0.gov@gmail.com (last resort)</li>
        </ul>

        <p>Phone</p>
        <ul>
            <li>+44 07406 166093</li>
        </ul>
    </div>
</body>

<style>
    body {
        background-color: black;
        color: white;
        font-family: poppins, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .topbar {
        width: 100vw;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: rgb(47, 46, 46);
    }

    .topbar h1 {
        margin: 0;
    }

    .title {
        display: flex;
        align-items: center;
    }

    .title img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
    }

    .top_container {
        display: flex;
        gap: 10px;
    }


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
