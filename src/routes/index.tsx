import { createFileRoute } from '@tanstack/react-router';
import { CheckCircle, DollarSign, PieChart, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
	// Schema markup for SEO
	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Finanças Simples',
		description: 'Controle suas finanças pessoais de maneira simples e eficiente',
		url: 'https://financas-simples.com',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://financas-simples.com/search?q={search_term_string}',
			'query-input': 'required name=search_term_string',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Finanças Simples',
			logo: {
				'@type': 'ImageObject',
				url: 'https://financas-simples.com/logo.png',
			},
		},
	};

	const appSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Finanças Simples',
		description: 'Aplicativo de controle financeiro pessoal',
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'BRL',
			availability: 'https://schema.org/InStock',
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.8',
			reviewCount: '1250',
			bestRating: '5',
			worstRating: '1',
		},
	};

	return (
		<>
			{/* Schema markup */}
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: SEO schema markup
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: SEO schema markup
				dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
			/>

			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
				<main>
					<section className="relative px-6 py-24 sm:py-32 lg:px-8" aria-label="Seção principal">
						<div className="mx-auto max-w-4xl text-center">
							<div className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
								🚀 Novo! Agora com IA para análise financeira
							</div>

							<h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
								Finanças{' '}
								<span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
									Simples
								</span>
							</h1>

							<p className="text-xl leading-8 text-gray-600 mb-10 max-w-2xl mx-auto">
								Transforme a forma como você gerencia seu dinheiro. Nossa plataforma oferece controle total sobre suas
								finanças pessoais com simplicidade e inteligência.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
								<Button
									size="lg"
									className="text-lg px-8 py-4 h-auto"
									aria-label="Iniciar agora o controle das suas finanças"
								>
									<DollarSign className="mr-2 h-5 w-5" />
									Iniciar Agora
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="text-lg px-8 py-4 h-auto"
									aria-label="Ver demonstração da plataforma"
								>
									Ver Demonstração
								</Button>
							</div>
						</div>
					</section>

					<section className="py-24 bg-white" aria-label="Funcionalidades principais">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<header className="mx-auto max-w-2xl text-center mb-16">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Tudo que você precisa para controlar suas finanças
								</h2>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									Ferramentas poderosas e intuitivas para você tomar o controle do seu dinheiro
								</p>
							</header>

							<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								<li>
									<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
										<CardHeader>
											<PieChart className="h-12 w-12 text-blue-600 mb-4" aria-hidden="true" />
											<CardTitle>Controle de Gastos</CardTitle>
											<CardDescription>
												Categorize e acompanhe todos os seus gastos de forma automática e inteligente
											</CardDescription>
										</CardHeader>
									</Card>
								</li>

								<li>
									<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
										<CardHeader>
											<TrendingUp className="h-12 w-12 text-green-600 mb-4" aria-hidden="true" />
											<CardTitle>Planejamento Financeiro</CardTitle>
											<CardDescription>
												Crie metas, orçamentos e acompanhe seu progresso rumo à independência financeira
											</CardDescription>
										</CardHeader>
									</Card>
								</li>

								<li>
									<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
										<CardHeader>
											<Shield className="h-12 w-12 text-purple-600 mb-4" aria-hidden="true" />
											<CardTitle>Segurança Total</CardTitle>
											<CardDescription>
												Seus dados são protegidos com criptografia de nível bancário e autenticação robusta
											</CardDescription>
										</CardHeader>
									</Card>
								</li>
							</ul>
						</div>
					</section>

					<section className="py-24 bg-gray-50" aria-label="Benefícios da plataforma">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
								<article>
									<header>
										<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
											Por que escolher o Finanças Simples?
										</h2>
									</header>
									<p className="text-lg text-gray-600 mb-8">
										Nossa missão é tornar o controle financeiro acessível e descomplicado para todos. Com anos de
										experiência em tecnologia financeira, criamos uma solução que realmente funciona.
									</p>

									<ul className="space-y-4">
										<li className="flex items-start gap-3">
											<CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
											<div>
												<h3 className="font-semibold text-gray-900">Interface Intuitiva</h3>
												<p className="text-gray-600">Design pensado para ser simples e eficiente</p>
											</div>
										</li>

										<li className="flex items-start gap-3">
											<CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
											<div>
												<h3 className="font-semibold text-gray-900">Relatórios Inteligentes</h3>
												<p className="text-gray-600">Insights automáticos sobre seus hábitos financeiros</p>
											</div>
										</li>

										<li className="flex items-start gap-3">
											<CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
											<div>
												<h3 className="font-semibold text-gray-900">Suporte Especializado</h3>
												<p className="text-gray-600">Equipe dedicada para ajudar você a alcançar seus objetivos</p>
											</div>
										</li>
									</ul>
								</article>

								<aside className="relative">
									<div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
										<Users className="h-16 w-16 mb-6 opacity-80" aria-hidden="true" />
										<h3 className="text-2xl font-bold mb-4">Junte-se à nossa comunidade</h3>
										<p className="text-blue-100 mb-6">
											Milhares de pessoas já transformaram suas vidas financeiras conosco. Você será o próximo?
										</p>
										<Button variant="secondary" size="lg" className="w-full" aria-label="Começar gratuitamente agora">
											Começar Gratuitamente
										</Button>
									</div>
								</aside>
							</div>
						</div>
					</section>

					<section className="py-24 bg-gradient-to-r from-blue-600 to-green-600" aria-label="Chamada para ação">
						<div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
								Pronto para transformar suas finanças?
							</h2>
							<p className="text-xl text-blue-100 mb-10">
								Comece gratuitamente hoje mesmo e veja a diferença em apenas 30 dias
							</p>
							<Button
								size="lg"
								variant="secondary"
								className="text-lg px-8 py-4 h-auto"
								aria-label="Iniciar agora gratuitamente sem cartão de crédito"
							>
								<DollarSign className="mr-2 h-5 w-5" />
								Iniciar Agora - É Grátis
							</Button>
							<p className="text-sm text-blue-200 mt-4">Sem cartão de crédito necessário • Cancele quando quiser</p>
						</div>
					</section>
				</main>

				<footer className="bg-gray-900 py-12">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="text-center">
							<h3 className="text-2xl font-bold text-white mb-4">Finanças Simples</h3>
							<p className="text-gray-400 mb-6">Controlando finanças, construindo futuros</p>
							<nav className="flex justify-center space-x-6" aria-label="Links do rodapé">
								<button type="button" className="text-gray-400 hover:text-white transition-colors">
									Sobre
								</button>
								<button type="button" className="text-gray-400 hover:text-white transition-colors">
									Contato
								</button>
								<button type="button" className="text-gray-400 hover:text-white transition-colors">
									Privacidade
								</button>
								<button type="button" className="text-gray-400 hover:text-white transition-colors">
									Termos
								</button>
							</nav>
							<p className="text-gray-500 text-sm mt-8">© 2025 Finanças Simples. Todos os direitos reservados.</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
