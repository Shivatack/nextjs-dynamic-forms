// ./app/react-hot-toast/page.tsx

'use client';

import { type StatusReactHotToast, postFormReactHotToast } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "@/app/ui/button";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Home() {
	const initialState = { type: 'default', toastId: '' } as StatusReactHotToast;
	const [state, formAction] = useFormState(postFormReactHotToast, initialState);

	useEffect(() => {
		if (state.type === 'success') {
			toast.success('success', { id: state.toastId });
		} else if (state.type === 'error') {
			toast.error('error', { id: state.toastId });
		}

		state.type = initialState.type;
	}, [initialState, state]);

	const handleSubmitClick = () => {
		state.toastId = toast.loading('Loading...');
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
				<form action={formAction}>
					<div className="flex flex-col">
						<label htmlFor="horseColor">What color was Henri IV&apos;s white horse?</label>
						<input id="horseColor" name="horseColor" className="text-black"/>
						<Button type="submit" onClick={handleSubmitClick}>Submit</Button>
					</div>
				</form>
			</div>
		</main>
	);
}
