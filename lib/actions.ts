// ./lib/actions.ts

'use server';

/* import type Id statement added */
import type { Id } from "react-toastify";

export type Status = {
	type: 'default' | 'loading' | 'success' | 'error',
	toastId: Id /* Added a toastId field of type Id */
};

export async function postForm(previousState: Status, formData: FormData) {
	await new Promise((res) => setTimeout(res, 2000));

	if (formData.get('horseColor')?.toString().toLocaleUpperCase() === 'White'.toLocaleUpperCase()) {
		previousState.type = 'success';
	} else {
		previousState.type = 'error';
	}

	return previousState;
}
