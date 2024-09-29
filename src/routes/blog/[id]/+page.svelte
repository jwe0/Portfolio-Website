<script>
    import { onMount } from 'svelte';
    import "/src/app.css";

    import 'prismjs/themes/prism-tomorrow.css';
    import Prism from 'prismjs';
    import 'prismjs/components/prism-python';
    
    import { page } from "$app/stores";
    import { blogs } from "$lib/index";
    
    onMount(() => {
      Prism.highlightAll();
   });

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
                    <pre><code class="language-python">{element.content}</code></pre>
                {/if}
            {/each}
        </div>
    </div>
</body>

<style>
    pre {
        border-radius: 5px;
    }
</style>