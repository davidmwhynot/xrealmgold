import { h, Component } from 'preact';

export default class TopBar extends Component {
	state = {
		email: '',
		password: ''
	}

	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		alert(`login attempted\nemail: ${this.state.email}\npassword: ${this.state.password}`);
	}

	render() {
		const {
			email,
			password
		} = this.state;
		// const title = "Cross&nbsp;Realm&nbsp;Gold&nbsp;Exchange";
		const title = "X R G X";
		return (
			<div className="top-bar">
				<h1 className="brand">{title}</h1>

	      <form onSubmit={this.handleSubmit} className="login-form form-inline">
					<input
						className="form-control mr-md-2"
						type="email"
						placeholder="Email"
						autocomplete="email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>
					<input
						className="form-control mr-md-2"
						type="password"
						placeholder="Password"
						autocomplete="password"
						name="password"
						value={password}
						onChange={this.handleChange}
					/>
					<input className="btn btn-primary" type="submit" value="Login" />
				</form>
	    </div>
		);
	}
}
