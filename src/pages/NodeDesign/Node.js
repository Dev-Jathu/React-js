import "../NodeDesign/node.css";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import Photo from "./../../Components/assets/node.jpg";
export default function Node() {
  return (
    <div className="container">
      <div className="form">
        <Form
          class="name"
          name="Name"
          type="text"
          input="namefield"
          place="Enter your Name"
        />
        <Form
          class="name"
          name="Title"
          type="text"
          input="namefield"
          place="Enter your Title"
        />
        <Form
          class="name"
          name="CreatedBy"
          type="text"
          input="namefield"
          place="Who created"
        />
        <Form
          class="name"
          name="Content"
          type="text"
          input="namefield"
          place="Type your content"
        />
        <Form
          class="name"
          name="CreatedOn"
          type="number"
          input="namefield"
          place="Enter Create Date"
        />
        <Form
          class="name"
          name="DeadLine"
          type="number"
          input="namefield"
          place="DeadLine"
        />
        <Button class="Edit" name="Edit" />
        <Button class="Edit" name="Delete" />
      </div>
      <div className="nodephoto">
        <img src={Photo} />
      </div>
    </div>
  );
}
