import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Home.m.css';

const factory = create();

export const About = factory(function Home() {
	return (
		<div classes={css.root}>
			<head>
				<title>Tom Dye</title>
			</head>
			<h1>ABOUT</h1>
		</div>
	);
});

export default About;
