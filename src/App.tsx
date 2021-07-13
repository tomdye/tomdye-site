import { create, tsx } from '@dojo/framework/core/vdom';
import { Outlet } from '@dojo/framework/routing/Outlet';
import * as css from './App.m.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';

const factory = create();

export const App = factory(function App() {
	return (
		<main classes={css.root}>
			<Outlet id="main">
				{{
					home: <Home />,
					about: <About />,
					blog: <Blog />
				}}
			</Outlet>
		</main>
	);
});

export default App;
