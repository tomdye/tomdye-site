import { create, tsx } from '@dojo/framework/core/vdom';
import { Outlet } from '@dojo/framework/routing/Outlet';
import * as css from './App.m.css';
import { Home } from './pages/Home';

const factory = create();

export const App = factory(function App() {
	return (
		<main classes={css.root}>
			<Outlet id="main">
				{{
					home: <Home />
				}}
			</Outlet>
		</main>
	);
});

export default App;
