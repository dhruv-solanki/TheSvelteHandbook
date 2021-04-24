<script>
    const doSomething = event => {
        console.log(event);
        alert('Clicked!');
    }
</script>

<button on:click={doSomething}>
    Click me!
</button>