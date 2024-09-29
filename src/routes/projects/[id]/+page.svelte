<script>
    import "/src/app.css";
    import { page } from "$app/stores";
    import { projects } from "$lib/index";
    let project = projects[$page.params.id];
</script>

<head>
    <title>
        {project.page.title}
    </title>
</head>

<body>
    <div class="navbar">
        <ul>
            <li>
                <a href="/projects">Back</a>
            </li>
        </ul>
    </div>
    <div class="main">
        <div class="project">
            <h1>{project.page.title}</h1>
            <p>{project.page.description}</p>
            {#each project.page.elements as element}
                {#if element.type == "image"}
                    <img src={element.url} alt={element.alt} width={element.width} height={element.height} style="border: 1px solid white; border-radius: 5px;" />
                {:else if element.type == "text"}
                    <h1>{element.title}</h1>
                    <p>{element.content}</p>
                {/if}
            {/each}
            <h1>Features</h1>
            <ul>
                {#each project.page.features as feature}
                <li>{feature}</li>
                {/each}
            </ul>
            <a class="link" href={project.info.url}>Download</a>
        </div>
    </div>
</body>

<style>
    .link {
        color: white;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>