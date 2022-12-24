import { Component } from "react";

export default class CustomButton extends Component {
  btnClassList = () => {
    let classes = ["btn"];
    if (this.props.hint) {
      classes.push("text-italic");
    }
    if (this.props.warnMessage) {
      classes.push("btn-warning");
    }
    return classes.join(" ");
  };
  render() {
    const { text, hint } = this.props;
    return (
      <div className="btn-group tooltip">
        <button className={this.btnClassList()}>{text}</button>
        {hint ? <span className="tooltiptext">{hint}</span> : null}
      </div>
    );
  }
}
