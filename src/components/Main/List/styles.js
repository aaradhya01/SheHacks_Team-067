// import { makeStyles } from "@material-ui/core/styles";
// import { blue, pink } from "@material-ui/core/colors";

// export default makeStyles((theme) => ({
//   avatarIncome: {
//     color: "#fff",
//     backgroundColor: blue[500],
//   },
//   avatarExpense: {
//     color: theme.palette.getContrastText(pink[500]),
//     backgroundColor: pink[500],
//   },
//   list: {
//     maxHeight: "150px",
//     overflow: "auto",
//   },
// }));
import { makeStyles } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: blue[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));