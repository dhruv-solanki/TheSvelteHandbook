<script>
	export let name;

	import Dog, { bark } from './Dog.svelte';
	bark();

	import Counter from './Counter.svelte';

	import { getContext } from 'svelte';

	const someObject2 = getContext('key');
	console.log(`${someObject2}`);

	import { username, welcomeMsg } from './user.js';
	console.log(username);

	username.set('New Username');
	console.log(username);

	let newUsername = 'Dhruv';
	username.update(existing => {
		console.log(`Updating username from ${existing} to ${newUsername}`);
		return newUsername;
	});


	import {get} from 'svelte/store';
	const user = get(username);
	console.log(user);

	import SvelteRead from './SvelteRead.svelte';

	import { onMount } from 'svelte';

	onMount(async () => {
		const interval = setInterval(() => {
			console.log("Hey, just checking!");
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	import FormFields from './FormFields.svelte';

	import Network from './Network.svelte';

	import Events from './Events.svelte';
</script>

<main>
	<Network />

	<Events />

	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Dog />

	<Counter />

	<h3>
		{$username},

		{$welcomeMsg}
	</h3>

	<SvelteRead />

	<FormFields />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>