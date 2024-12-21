import '@global.css';

export function AppLayout({ children }: Readonly<{ children: TNode }>) {
	return (
		<>
			<main className='size-screen centered flex'>{children}</main>
		</>
	);
}
