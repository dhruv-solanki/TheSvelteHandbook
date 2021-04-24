<script>
    let formName = "Mahadev";
	let isChecked;

	let goodDogs = [];
	let dogs = ['Tommy', 'Roger', 'Libana', 'Molu', 'Simba'];

	let selected;
	let arraySelected;

	const heroes = [
		{name: 'batman'},
		{name: 'superman'},
		{name: 'winter soldier'},
		{name: 'thor'}
	];

	let topSuperHero;
	let flag = false;

	setInterval(() => {
		flag = !flag;
		if(flag) {
			topSuperHero.style.padding = '10px';
			topSuperHero.style.backgroundColor = 'seagreen';
		} else {
			topSuperHero.style.backgroundColor = 'lightblue';
		}
	}, 1000);

</script>

<style>
	ul {
		list-style-type: none;
	}

	li {
		background-color: wheat;
		padding: 10px;
		margin: 5px;
		display: inline;
	}

	#selected {
		margin-top: 20px;
	}

	#selected h5 {
		background-color: royalblue;
		color: aliceblue;
		padding: 10px;
		display: inline;
	}
</style>

<div>
    <h5> Hello, {formName} </h5>
	<input type="text" bind:value={formName}>

	<h5> Please Check Me : 
		<input type="checkbox" bind:checked={isChecked}>
	</h5>

	<h2>
		Who is a good Dog?
	</h2>

	<ul>
		{#each dogs as dog}
			<li>
				{dog} <input type="checkbox" bind:group={goodDogs} value={dog}>
			</li>
		{/each}
	</ul>

	<h2>
		Good Dogs according to me!
	</h2>

	<ul>
		{#each goodDogs as dog, index(dog)} 
			<li>{index}: {dog}</li>
		{/each}
	</ul>

	<div id="selected">
		<select bind:value={selected}>
			<option value="Dhruv">Dhruv</option>
			<option value="Batman">Batman</option>
			<option value="Jeff">Jeff</option>
		</select>

		<h5>
			{selected}
		</h5>
	</div>

	<div id="arraySelected">
		<h2>List of possible Top Super Heroes</h2>

		<select bind:value={arraySelected}>
			{#each heroes as hero}
				<option value={hero}>{hero.name}</option>
			{/each}
		</select>

		{#if arraySelected}
			<h2 bind:this={topSuperHero}>
				Top Super Hero: {arraySelected.name}
			</h2>
		{/if}
	</div>
</div>