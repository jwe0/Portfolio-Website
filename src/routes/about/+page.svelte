<script>
    import "/src/app.css";
    import { pages, badges, stacks } from "$lib/index";
</script>

<head>
    <title>About</title>
</head>

<body>
    <div class="navbar">
        <ul>
            {#each pages as page}
                {#if page.align == "left"}
                    <li>
                        <a href={page.path}>{page.name}</a>
                    </li>
                {:else}
                    <li class="right">
                        <a href={page.path}>{page.name}</a>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="main">
        <h1>About</h1>
        <div class="boxes">
            <div class="box">
                <div class="title">Digital Literacy</div>
                <p>I have been programming for over 4 years, with intermediate-level knowledge of Python and experience in Rust. I am also familiar with web development frameworks like SvelteKit and possess strong computational thinking skills.</p>
            </div>
            <div class="box">
                <div class="title">Teamwork</div>
                <p>For the past 3 years, I have participated in Chattabox+, where I learned to work effectively in a team. Leading my group during Laser Tag, I organized a strong formation that helped us secure first place, demonstrating my ability to lead and take feedback.</p>
            </div>
            <div class="box">
                <div class="title">Working Under Pressure</div>
                <p>I excel at maintaining focus in high-pressure situations, which allows me to approach tasks logically and effectively. This skill helps me navigate challenges without losing sight of the goal.</p>
            </div>
            <div class="box">
                <div class="title">Problem Solving</div>
                <p>My programming background has honed my problem-solving abilities. I enjoy deconstructing complex problems into manageable parts and often explore multiple solutions to ensure the best outcome.</p>
            </div>
        </div>
        <div class="stat_row">
            <h1 class="title">My stacks</h1>
            <div class="statboxroot">
                {#each stacks as stack}
                    <div class="statbox">
                        <img src={stack.url} width="{stack.width}" alt={stack.name}>
                        <p>{stack.name}</p>
                    </div>         
                {/each}
            </div>
        </div>
        <div class="stat_row">
            <h1 class="title">THM Badges</h1>
            <div class="statboxroot">
                {#each badges as badge}
                    <div class="statbox">
                        <img src={badge.url} width="50" alt={badge.name}>
                        <p>{badge.name}</p>    
                    </div>
                {/each}
            </div>
        </div>
    </div>
</body>