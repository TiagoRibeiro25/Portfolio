const PRE_KEY = "Tiago_Ribeiro_";

export function getSessionStorage(key: string) {
	key = PRE_KEY + key;
	/* eslint-disable */
	return sessionStorage[key] ? JSON.parse(sessionStorage[key]!) : null;
}

/* eslint-disable */
export function setSessionStorage(key: string, value: any) {
	key = PRE_KEY + key;
	sessionStorage[key] = JSON.stringify(value);
}

export function removeSessionStorage(key: string) {
	key = PRE_KEY + key;
	sessionStorage.removeItem(key);
}
