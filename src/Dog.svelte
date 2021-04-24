<script>
    export let name = "Tommy";

    import { setContext } from 'svelte';

    const someObject = 'some';
    setContext('key', someObject);
</script>

<script context="module">
    export function bark() {
        console.log("I am barking!!!");
    }
</script>

<style>
    h1 {
        color: purple;
    }
</style>

<h1>
    The Dog Name is {name}!
</h1>