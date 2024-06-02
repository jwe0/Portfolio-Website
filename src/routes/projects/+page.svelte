<script>
    import "/src/style.css";
    import { pages } from "$lib/index.js";

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
                <button
                    on:click={() => (window.location.href = page.url)}
                    >{page.name}</button
                >
            {/each}
        </div>
    </div>

    <br /><br />

    <div class="project animated-element-2">
        <h1>Pymanager</h1>
        <p><u>Secure password manager</u></p>

        <ul>
            <li>AES CBC Encryption</li>
            <li>SQLite Database</li>
            <li>Flask Framework Webui</li>
            <li>Import from other password managers</li>
        </ul>

        <button
            on:click={() =>
                (window.location.href = "https://github.com/jwe0/Pymanage")}
            >Github</button
        >
    </div>

    <div class="project animated-element-1">
        <h1>Portfolio</h1>
        <p><u>My personal portfolio</u></p>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Svelte</li>
            <li>Nodejs</li>
        </ul>
    </div>

    <div class="project animated-element-2">
        <h1>Mage</h1>
        <p><u>Profile link osint</u></p>

        <ul>
            <li>Scrapes popular link hosts</li>
            <li>Python</li>
            <li>Threading</li>
            <li>Enumerate extra information</li>
        </ul>

        <button
            on:click={() =>
                (window.location.href = "https://github.com/jwe0/Mage")}
            >Github</button
        >
    </div>

    <div class="project animated-element-1">
        <h1>Warlock</h1>
        <p><u>Username enumerter</u></p>

        <ul>
            <li>Python</li>
            <li>Threading</li>
            <li>Enumerate extra information</li>
            <li>Custom site lists</li>
        </ul>
    </div>
</body>

<style>
    .project {
        text-align: center;
        border: 1px solid white;
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        width: 600px;
    }

    .project ul {
        list-style-type: none;
        padding: 0;
    }
</style>
