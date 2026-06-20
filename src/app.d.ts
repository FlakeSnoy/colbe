import type { User, Session } from 'better-auth';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare module 'lucide/svelte' {
	export * from '@lucide/svelte';
	export { default } from '@lucide/svelte';
}

declare module 'lucide/svelte/icons/*' {
	const component: any;
	export default component;
}

declare global {
	namespace App {
		interface Locals { user?: User; session?: Session }

		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
