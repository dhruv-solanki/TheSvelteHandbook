<script>
    const image = (async () => {
        const response = await fetch('https://source.unsplash.com/random');
        console.log(response);
        return await response;
    })();
</script>

<div>
    {#await image} 
        <p>...waiting</p>
    {:then data} 
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={data.url} alt="Dog Image" height="500px"/>
    {:catch error} 
        <p>An error occurred! {error}</p>
    {/await}
</div>