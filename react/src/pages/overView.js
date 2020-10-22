import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";

const OverView = ({ rest }) => {
  const [value, setValue] = useState(0);
  console.log(rest);
  return (
    <div>
      <h1>{rest.name}</h1>
      <h5>
        {rest.dishes.map((dish) => {
          return (
            <ul>
              <li>{dish}</li>
              <Rating
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
            </ul>
          );
        })}
      </h5>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { rest: state.rest };
};

export default connect(mapStateToProps)(OverView);
