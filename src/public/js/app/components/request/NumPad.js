import { h, Component } from 'preact';

export default class NumPad extends Component {

	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		alert('Submitted');
		e.preventDefault();
	}

	render() {

		return (
			<div className="request">
				<div className="request-main">
					<form onSubmit={this.handleSubmit} className="request-form">
						<div className="request-group">
							<h3 className="amount-title">I need...</h3>
							<div className="amount-row">
								<label htmlFor="need">Amount:</label>
								<span>
									<input
										className="amount-input"
										type="text"
										autocomplete="off"
										placeholder="0"
										name="need"
										value={need}
										onChange={this.handleChange}
									/>k
								</span>
							</div>
							<div className="realm-row">
								<label htmlFor="needRealm">Realm:</label>
								<input
									className="realm-input"
									type="text"
									autocomplete="off"
									placeholder="Sargeras"
									name="needRealm"
									value={needRealm}
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<div className="request-group mt-2">
							<h3 className="amount-title">I have...</h3>
							<div className="amount-row">
								<label htmlFor="have">Amount:</label>
								<span>
									<input
										className="amount-input"
										type="text"
										autocomplete="off"
										placeholder="0"
										name="have"
										value={have}
										onChange={this.handleChange}
									/>k
								</span>
							</div>
							<div className="realm-row">
								<label htmlFor="haveRealm">Realm:</label>
								<input
									className="realm-input"
									type="text"
									autocomplete="off"
									placeholder="Sargeras"
									name="haveRealm"
									value={haveRealm}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<input className="btn btn-primary btn-block btn-lg mt-xl-3" type="submit" value="Submit request" />
					</form>

					<div className="request-tool">
						<h1>NumPad</h1>
						<h1>Realms</h1>
					</div>
				</div>
			</div>
		);
	}
}
