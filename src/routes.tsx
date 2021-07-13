import { RouteConfig } from '@dojo/framework/routing/interfaces';

const routes: RouteConfig[] = [
	{
		id: 'home',
		path: '/',
		outlet: 'main',
		defaultRoute: true
	},
	{
		id: 'about',
		path: '/about',
		outlet: 'main'
	},
	{
		id: 'blog',
		path: '/blog',
		outlet: 'main'
	}
];

export default routes;
