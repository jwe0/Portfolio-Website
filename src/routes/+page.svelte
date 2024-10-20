<script>
    import "/src/app.css";
    import { pages } from "$lib/index";
</script>

<head>
    <title>Joshua Webb</title>
</head>

<body>
    <div class="dots">
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
            <div class="home">
                <h1>Joshua Webb</h1>
                <div class="aboutme_home">
                    <div class="box">
                        <h1 class="title">Whoami</h1>
                        <p>I am a tech enthusiast. I enjoy programming, networking and security. I have 4+ years of experience in programming as well as 2 years of experience in networking and security.</p>
                    </div>
                    <div class="box">
                        <h1 class="title">Qualifications</h1>
                        <p>I have completed a BTEC Digital Information Technology course at GCSE level and achieved a merit overall. I am currently doing a Digital Skills & IT Intermediate at College and intend to do a Level 3 T-Level or an Apprenticeship.</p>
                    </div>  
                    <div class="box">
                        <h1 class="title">Work experience</h1>
                        <p>I am currently in a volunteering role at the Air Ambulance charity shop in my town, this has allowed me to get customer service skills and how to work on a till.</p>
                    </div>      
                    <div class="box">
                        <h1 class="title">Hobbies</h1>
                        <p>Besides my technical interest I am a fan of climbing both in gyms and outside in trees.</p>
                    </div> 
                </div>
            </div>

        </div>

    </div>

</body>