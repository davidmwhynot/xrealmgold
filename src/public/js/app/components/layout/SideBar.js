import { h } from 'preact';
import { Link } from 'preact-router/match';

export default () => {
	return (
		<div className="side-bar">
			<ul className="list-group list-group-flush">
				<Link activeClassName="active" href="/" className="list-group-item">Home</Link>
				<Link activeClassName="active" href="/about" className="list-group-item">About</Link>
			</ul>
    </div>
	);
}
