import { React } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  withStyles,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

export default function ToggleUnits({ setCurrentUnit, currentUnit }) {
  const handleChange = (event) => {
    const newUnit = event.target.value;
    setCurrentUnit(newUnit);
  };

  const StylisedRadio = withStyles({
    root: {
      color: indigo[50],
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="unit"
        name="unit1"
        value={currentUnit}
        onChange={handleChange}
      >
        <FormControlLabel value="celsius" control={<StylisedRadio />} label="Celsius" />
        <FormControlLabel
          value="fahrenheit"
          control={<StylisedRadio />}
          label="Fahrenheit"
        />
        <FormControlLabel value="kelvin" control={<StylisedRadio />} label="Kelvin" />
      </RadioGroup>
    </FormControl>
  );
}

ToggleUnits.propTypes = {
  results: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};
