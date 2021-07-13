import { create, tsx } from '@dojo/framework/core/vdom';
import Link from '@dojo/framework/routing/Link';
import * as css from './Home.m.css';

const factory = create();

export const Home = factory(function Home() {
	return (
		<div classes={css.root}>
			<head>
				<title>Tom Dye</title>
			</head>
			<h1>Hello, World</h1>
			<Link to="about">About</Link>
			<Link to="blog">Blog</Link>
		</div>
	);
});

export default Home;
