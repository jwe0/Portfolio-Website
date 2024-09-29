<script>
    import "/src/app.css";
    import { page } from "$app/stores";
    import { blogs } from "$lib/index";
    let blog = blogs[$page.params.id];
</script>



<head>
    <title>
        {blog.page.title}
    </title>
</head>

<body>
    <div class="navbar">
        <ul>
            <li>
                <a href="/blog">Back</a>
            </li>
        </ul>
    </div>
    <div class="main">
        <div class="project">
            <h1>{blog.page.title}</h1>
            <p>{blog.page.description}</p>
            {#each blog.page.elements as element}
                {#if element.type == "image"}
                    <img src={element.url} alt={element.alt} width={element.width} height={element.height} style="border: 1px solid white; border-radius: 5px;" />
                {:else if element.type == "text"}
                    <h1>{element.title}</h1>
                    <p>{element.content}</p>
                {:else if element.type == "link"}
                    <a href={element.url}>{element.content}</a>
                {:else if element.type == "code"}
                    <pre>{element.content}</pre>
                {/if}
            {/each}
        </div>
    </div>
</body>

<style>
    pre {
        background-color: #2e3440;
        color: #d8dee9;
        padding: 15px;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        line-height: 1.5;
        overflow-x: auto;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        white-space: pre-wrap;
    }
</style>