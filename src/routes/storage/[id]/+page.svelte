<script>
    import { page } from "$app/stores";
    import { files } from "$lib/index";

    $: currentFile = files[$page.params.id];
</script>

<head>
    <title>Joshua Webb</title>
</head>

<body>
    <iframe src={currentFile.path} frameborder="0" title="File"></iframe>
</body>

<style>
   body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    iframe {
        width: 100%;
        height: 100vh;
        border: none;
    }
</style>
