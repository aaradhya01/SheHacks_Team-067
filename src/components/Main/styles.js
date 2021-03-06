import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
}));
