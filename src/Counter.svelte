<script>
    let count = 0;

    const incrementCount = () => {
        count++;
    }

    $: {
        console.log(`${count}`);
    }
</script>

<style>
    h2 {
        color: royalblue;
    }
</style>

<h2>
    You have clicked => {count} <button on:click={incrementCount}> + </button>
</h2>