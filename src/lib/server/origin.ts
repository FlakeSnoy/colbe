const FALLBACK_ORIGIN = 'http://localhost:5173';

export function normalizeOrigin(rawOrigin: string | undefined): string {
	const trimmedOrigin = rawOrigin?.trim();

	if (!trimmedOrigin) {
		return FALLBACK_ORIGIN;
	}

	const candidateOrigin = trimmedOrigin.startsWith('ORIGIN=')
		? trimmedOrigin.slice('ORIGIN='.length)
		: trimmedOrigin;

	try {
		return new URL(candidateOrigin).origin;
	} catch {
		return FALLBACK_ORIGIN;
	}
}