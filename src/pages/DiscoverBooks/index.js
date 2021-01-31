import { FormGroup, Input } from "components/lib";
import * as React from "react";

export default function DiscoverBooksPage() {
	const [query, setQuery] = React.useState("");
	const data = null;
	const isLoading = false;
	const isSuccess = false;

	React.useEffect(() => {
		const url = `process.env.REACT_APP_URL/books?query=${encodeURIComponent(
			query
		)}`;
		window.fetch(url).then((res) => res.json());
	}, [query]);
	const submitHandler = (e) => {
		e.preventDefault();
		console.log(e.elements);
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<FormGroup>
					<Input placeholder="Search books..." id="search" name="search" />
				</FormGroup>
			</form>
		</div>
	);
}
