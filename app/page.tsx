// ./app/page.tsx

'use client';

import { type Status, postForm } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "@/app/ui/button";
import { type Id, toast } from "react-toastify";
import { useEffect } from "react";

export default function Home() {
	const initialToastId = '' as Id;
	const initialState = { type: 'default', toastId: initialToastId } as Status;
	const [state, formAction] = useFormState(postForm, initialState);

	const handleSubmitForm = (formData: FormData) => {
		state.toastId = toast.loading('Loading...');
		formAction(formData);
	};

	useEffect(() => {
		if (state.type === 'success') {
			toast.update(state.toastId, { render: 'Success!', type: "success", autoClose: 1500, closeButton: true, isLoading: false });
		} else if (state.type === 'error') {
			toast.update(state.toastId, { render: 'Error!', type: "error", autoClose: 1500, closeButton: true, isLoading: false });
		}

		state.type = initialState.type;
	}, [initialState.type, state]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
				<form action={handleSubmitForm}>
					<div className="flex flex-col">
						<label htmlFor="horseColor">What color was Henri IV&apos;s white horse?</label>
						<input id="horseColor" name="horseColor" className="text-black"/>
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</div>
		</main>
	);
}
