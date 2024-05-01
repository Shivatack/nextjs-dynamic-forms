// ./lib/actions.ts

'use server';

/* REACT-TOASTIFY ------- BEGIN */
import type { Id } from "react-toastify";

export type Status = {
	type: 'default' | 'loading' | 'success' | 'error',
	toastId: Id
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
/* REACT-TOASTIFY ------- END */

/* REACT-HOT-TOAST ------- BEGIN */
export type StatusReactHotToast = {
	type: 'default' | 'loading' | 'success' | 'error',
	toastId: string
};

export async function postFormReactHotToast(previousState: StatusReactHotToast, formData: FormData) {
	await new Promise((res) => setTimeout(res, 2000));

	if (formData.get('horseColor')?.toString().toLocaleUpperCase() === 'White'.toLocaleUpperCase()) {
		previousState.type = 'success';
	} else {
		previousState.type = 'error';
	}

	return previousState;
}
/* REACT-HOT-TOAST ------- END */