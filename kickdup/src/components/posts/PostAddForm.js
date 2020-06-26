import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";
import getManufacturers from "../../modules/ManufacturerManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const PostAddForm = (props) => {
  const [postInfo, setPostInfo] = useState({
    manufacturer_id: "",
    model: "",
    colorway: "",
    description: "",
  });
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...postInfo };
    stateToChange[evt.target.id] = evt.target.value;
    setPostInfo(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    PostManager.post(postInfo).then((resp) =>
      props.routerProps.history.push(`/posts/${resp.id}/addphoto`)
    );
  };

  const getManufacturersFromAPI = () => {
    getManufacturers().then((manufacturers) => {
      setManufacturers(manufacturers);
    });
  };

  useEffect(() => {
    getManufacturersFromAPI();
  }, []);

  return (
    <>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Form style={{width: '80%'}}>
          <FormGroup>
            <Input
              type="select"
              className="select"
              id="manufacturer_id"
              onChange={handleFieldChange}
              required
            >
              <option disabled={true} selected value="">
                Select
              </option>
              {manufacturers.map((manufacturer) => {
                return (
                  <option key={manufacturer.id} value={manufacturer.id}>
                    {manufacturer.name}
                  </option>
                );
              })}
            </Input>
            <Label htmlFor="manufacturer_id">Manufacturer</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="model"
              placeholder="Model"
            />
            <Label htmlFor="model">Model</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="colorway"
              placeholder="Colorway"
            />
            <Label htmlFor="colorway">Colorway</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Description"
            />
            <Label htmlFor="model">Description</Label>
          </FormGroup>

          <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostAddForm;
