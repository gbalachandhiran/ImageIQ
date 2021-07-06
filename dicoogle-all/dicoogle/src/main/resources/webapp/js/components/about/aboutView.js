import React from "react";
import createReactClass from "create-react-class";

import { VersionStore } from "../../stores/versionStore";
import { VersionActions } from "../../actions/versionAction";
import { Panel, Grid, Row, Col } from "react-bootstrap";

const AboutView = createReactClass({
  getInitialState: function() {
    return { version: "" };
  },
  componentWillMount: function() {},
  componentDidMount: function() {
    // Subscribe to the store.
    this.unsubscribe = VersionStore.listen(this.handleGetVersion);
    VersionActions.get();
  },
  handleGetVersion: function(data) {
    this.setState({ version: data.data.version });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  render: function() {
    const versionNumber = this.state.version;

    var panelsInstance = (
      <div className="about">
        
      </div>
    );
    return panelsInstance;
  }
});

export default AboutView;
