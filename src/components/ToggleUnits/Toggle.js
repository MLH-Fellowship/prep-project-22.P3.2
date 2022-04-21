import { React } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  withStyles,
} from "@material-ui/core";
import { experimental_sx as sx } from "@mui/system";

export default function ToggleUnits({ setCurrentUnit, currentUnit }) {
  const handleChange = (event) => {
    const newUnit = event.target.value;
    setCurrentUnit(newUnit);
  };

  const StylisedRadio = withStyles(
    sx({
      root: {
        color: "rgb(15, 144, 254, .7)",
        height: "3px",
        width: "3px",
        margin: "0 8px",
        "& .MuiSvgIcon-root": {
          height: "20px",
          width: "20px",
        },
      },
      checked: {},
    })
  )((props) => <Radio color="default" {...props} />);

  const StyledLabel = withStyles(
    sx({
      root: {
        margin: { xs: "10px 3px", sm: "10px 15px" },
      },
    })
  )((props) => <FormControlLabel color="default" {...props} />);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="unit"
        name="unit1"
        value={currentUnit}
        onChange={handleChange}
      >
        <StyledLabel value="celsius" control={<StylisedRadio />} label="Celsius" />
        <StyledLabel value="fahrenheit" control={<StylisedRadio />} label="Fahrenheit" />
        <StyledLabel value="kelvin" control={<StylisedRadio />} label="Kelvin" />
      </RadioGroup>
    </FormControl>
  );
}
