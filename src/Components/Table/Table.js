import "./Table.css";
import Form from "../Form/Form";
import Button from "../Button/Button"

export default function Table(props) {
  return (
    <div className="adjust">
    <div className="containerTable">
        <Form type="text" input='table' place='Noteno'/>
        <Form type="text" input='table' place='Title'/>
        <Form type="text" input='table' place='Created by'/>
        <Form type="date" input='table' place='Created on'/>
        <Form type="text" input='table' place='content'/>
    </div>
    <div className="h3">
      <h3>NoteNo</h3>
      <h3>Title</h3>
      <h3>Created By</h3>
      <h3>Created on</h3>
      <h3>Content</h3>

    </div>
    <div className="buttonnode">
      <Button class='edit' name='Edit'/>
      <Button class='edit' name='Delete'/>
    </div>
    </div>
  );
}
