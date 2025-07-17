import { createFileRoute, Link } from '@tanstack/react-router';
import { FaChartLine, FaPiggyBank, FaWallet } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
	component: Home,
	ssr: true,
	head: () => ({
		meta: [
			{
				title: 'Finanças Simples - Gerencie seu dinheiro de forma inteligente',
			},
			{
				name: 'description',
				content:
					'Controle suas finanças pessoais de maneira simples e eficiente. Acompanhe gastos, planeje orçamentos e alcance seus objetivos financeiros. Gratuito para começar.',
			},
			{
				name: 'keywords',
				content:
					'controle financeiro, gestão financeira, orçamento pessoal, planejamento financeiro, gastos, economia, finanças pessoais, aplicativo financeiro',
			},
			{
				name: 'author',
				content: 'Finanças Simples',
			},
			{
				name: 'robots',
				content: 'index, follow',
			},
			{
				name: 'language',
				content: 'pt-BR',
			},
			// Open Graph meta tags
			{
				property: 'og:title',
				content: 'Finanças Simples - Gerencie seu dinheiro de forma inteligente',
			},
			{
				property: 'og:description',
				content:
					'Controle suas finanças pessoais de maneira simples e eficiente. Acompanhe gastos, planeje orçamentos e alcance seus objetivos financeiros.',
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:url',
				content: 'https://financas-simples.com',
			},
			{
				property: 'og:image',
				content: 'https://financas-simples.com/og-image.jpg',
			},
			{
				property: 'og:image:width',
				content: '1200',
			},
			{
				property: 'og:image:height',
				content: '630',
			},
			{
				property: 'og:site_name',
				content: 'Finanças Simples',
			},
			{
				property: 'og:locale',
				content: 'pt_BR',
			},
			// Twitter Card meta tags
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				name: 'twitter:title',
				content: 'Finanças Simples - Gerencie seu dinheiro de forma inteligente',
			},
			{
				name: 'twitter:description',
				content:
					'Controle suas finanças pessoais de maneira simples e eficiente. Acompanhe gastos, planeje orçamentos e alcance seus objetivos financeiros.',
			},
			{
				name: 'twitter:image',
				content: 'https://financas-simples.com/twitter-image.jpg',
			},
			// Additional SEO meta tags
			{
				name: 'theme-color',
				content: '#2563eb',
			},
		],
		links: [
			// {
			// 	rel: 'canonical',
			// 	href: 'https://financas-simples.com',
			// },
			{
				rel: 'manifest',
				href: '/manifest.json',
			},
		],
	}),
});

function Home() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-between px-14 py-4">
			<header className="text-center mb-8 mt-24">
				<h1 className="text-4xl font-bold text-gray-800">Finanças Simples</h1>
				<p className="text-lg text-gray-600 mt-2">Controle suas finanças pessoais de maneira simples e eficiente.</p>
			</header>

			<main className="text-center">
				<p className="text-gray-700 mb-6">
					Um aplicativo intuitivo para gerenciar seu dinheiro, planejar orçamentos e alcançar seus objetivos
					financeiros.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
						<FaPiggyBank className="text-4xl text-blue-500 mb-4" />
						<h3 className="text-lg font-semibold text-gray-800">Economize</h3>
						<p className="text-sm text-gray-600 mt-2">Acompanhe seus gastos e economize para o futuro.</p>
					</div>
					<div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
						<FaChartLine className="text-4xl text-green-500 mb-4" />
						<h3 className="text-lg font-semibold text-gray-800">Planeje</h3>
						<p className="text-sm text-gray-600 mt-2">Crie orçamentos e alcance seus objetivos financeiros.</p>
					</div>
					<div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
						<FaWallet className="text-4xl text-yellow-500 mb-4" />
						<h3 className="text-lg font-semibold text-gray-800">Gerencie</h3>
						<p className="text-sm text-gray-600 mt-2">Tenha controle total sobre suas finanças.</p>
					</div>
				</div>
				<div className="flex justify-center gap-4 mt-6">
					<Button className="px-6 py-3 text-lg font-medium">
						<Link to="/auth/signin">Entrar</Link>
					</Button>
					<Button className="px-6 py-3 text-lg font-medium bg-blue-600 text-white hover:bg-blue-700">
						<Link to="/auth/signup">Criar Conta</Link>
					</Button>
				</div>
			</main>

			<footer className="mt-12 text-sm text-gray-500 text-center">
				&copy; {new Date().getFullYear()} Finanças Simples. Todos os direitos reservados.
			</footer>
		</div>
	);
}
