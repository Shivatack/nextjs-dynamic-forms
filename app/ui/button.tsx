'use client';

import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			{...rest}
			className='flex my-5 h-10 items-center rounded-lg px-4 text-sm font-medium text-black bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:bg-red-600 disabled:text-white justify-center'
			disabled={pending}
			aria-disabled={pending}
		>
			{children}
		</button>
	);
}
