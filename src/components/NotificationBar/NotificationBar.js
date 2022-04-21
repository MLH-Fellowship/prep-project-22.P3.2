import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NotificationBar = ({ error, setError, setCity }) => {
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
    setCity("New York");
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={error ? true : false}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
        {error.message}. Default location is set to New York
      </Alert>
    </Snackbar>
  );
};

export default NotificationBar;
