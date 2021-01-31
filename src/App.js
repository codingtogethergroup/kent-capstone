import * as React from "react";
import GlobalStyle from "components/GlobalStyle";
import DiscoverBooksPage from "pages/DiscoverBooks";
import LoginPage from "pages/LoginPage";
import { Route, Switch } from "react-router";

function App() {
	return (
		<>
			<GlobalStyle />
			<main style={{ padding: "16px" }}>
				<Switch>
					<Route path="/" component={LoginPage} exact />
					<Route path="/books" component={DiscoverBooksPage} />
				</Switch>
			</main>
		</>
	);
}

export default App;
