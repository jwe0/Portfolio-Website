<script>
    import "/src/app.css";
    import { page } from "$app/stores";
    import { projects } from "$lib/index";
    let project = projects[$page.params.id];
</script>

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
            <h1>Features</h1>
            <ul>
                {#each project.page.features as feature}
                <li>{feature}</li>
                {/each}
            </ul>
            <a href={project.info.link}>Download</a>
        </div>
    </div>
</body>