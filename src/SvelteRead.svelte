<script>
    import { get, readable } from 'svelte/store';

    const count = readable(0, set => {
        setInterval(() => {
            set(
                get(count) + 1
            );
        }, 1000);
    });
</script>

<style>
    h1 {
        color: teal;
    }
</style>

<h1>
    {$count}
</h1>