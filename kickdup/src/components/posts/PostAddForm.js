import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";
import getManufacturers from "../../modules/ManufacturerManager";

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
    PostManager.post(postInfo).then(resp => props.routerProps.history.push(`/posts/${resp.id}/addphoto`));
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
      <form>
        <fieldset>
          <select
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
          </select>
          <label htmlFor="manufacturer_id">Manufacturer</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="model"
            placeholder="Model"
          />
          <label htmlFor="model">Model</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="colorway"
            placeholder="Colorway"
          />
          <label htmlFor="colorway">Colorway</label>
        </fieldset>
        <fieldset>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="description"
            placeholder="Description"
          />
          <label htmlFor="model">Description</label>
        </fieldset>
        <button type="submit" disabled={isLoading} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default PostAddForm;
