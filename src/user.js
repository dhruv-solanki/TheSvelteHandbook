import { writable, derived } from 'svelte/store';
    
export const username = writable('Guest');

export const welcomeMsg = derived(username, $username => {
    return `Welcome ${$username}`;
});