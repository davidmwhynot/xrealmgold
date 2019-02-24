import { h, Component } from "preact";

import Animate from "preact-animate";

import Form from "./Form";

export default class Request extends Component {
  state = {
    step: 0,
    newStep: null,
    formFields: {
      need: "",
      needRealm: "",
      have: "",
      haveRealm: "",
      btag: "",
      discord: ""
    }
  };

  constructor(props) {
    super(props);
  }

  updateStep = step => {
    console.log("\nupdateStep");
    console.log("step: " + step, step);
    console.log("this.state.step: " + this.state.step, this.state.step);
    console.log(
      "this.state.newStep: " + this.state.newStep,
      this.state.newStep
    );
    console.log("\n");
    this.state.newStep
      ? this.setState({
          step: step,
          newStep: null
        })
      : this.setState({
          step: "ANIMATE",
          newStep: step
        });
  };

  resetFields = () => {
    this.setState({
      formFields: {
        need: "",
        needRealm: "",
        have: "",
        haveRealm: "",
        btag: "",
        discord: ""
      }
    });
  };

  onClick = e => {
    console.log(`clicked on: ${[e.target.name]}`);
  };

  handleChange = e => {
    this.setState({
      formFields: {
        ...this.state.formFields,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { step, formFields, newStep } = this.state;

    console.log("\n-----\nrender");
    console.log("this.state");
    console.log(this.state);
    console.log("this.state.step", this.state.step);
    console.log("this.state.newStep", this.state.newStep);
    console.log("\n-----\n\n");

    return (
      <div className="request">
        <Animate
          transitionName="fade"
          onLeave={() => {
            console.log("onLeave");
            this.updateStep(newStep);
          }}
        >
          <Form
            step={step}
            updateStep={this.updateStep}
            resetFields={this.resetFields}
            formFields={formFields}
            change={this.handleChange}
            click={this.onClick}
            key={step}
          />
        </Animate>
        <div className="request-tool">
          <h3>Transfer Tool</h3>
          <p>
            Start by entering the amount of gold you need and what realm you
            need it on. Then, enter the realm and amount you are willing to
            trade.
          </p>
        </div>
      </div>
    );
  }
}
