import React from "react";
import "./CreateForm.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateForm = props => (
  <div className="form text-center">{props.children}</div>
);

export default CreateForm;
