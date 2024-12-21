import { AppLayout } from '@core/layout';
import { AppProvider } from '@core/providers';

export default function RootLayout({ children }: Readonly<{ children: TNode }>) {
	return (
		<html lang='pt-BR'>
			<head>
				<link rel='icon' href='/favicon.png' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Ploomes Interview</title>
			</head>
			<body>
				<AppProvider></AppProvider>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
