import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  income: {
    backgroundColor: "rgba(197, 239, 247, 1)",
    borderBottom: "20px solid rgba(255,105,180,0.8)",
    boxShadow: "0px 20px 20px 20px rgba(197, 255, 245, 0.4)",
  },
  expense: {
    backgroundColor: "#ffdbe6",
    borderBottom: "20px solid rgb(135,206,250)",
    boxShadow: "20px 0px 20px 0 rgba(255, 105, 135, 0.4)",
  },
}));
