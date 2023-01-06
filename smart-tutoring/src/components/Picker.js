
// // import { Typography } from "@mui/material";
// import React from "react";
// import Box from "@mui/material/Box";
// // import {
// //     Experimental_CssVarsProvider as CssVarsProvider,
// //     useColorScheme,
// //     experimental_extendTheme,
// //   } from '@mui/material/styles';
// // import { View, Text, StyleSheet } from "react-native";

// import Picker from "./Picker";

// const theme = ({
//     container: {
//         flex: 1,
//         backgroundColor: "black",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     title: {
//         color: "white",
//         fontFamily: "SFProText-Semibold",
//         fontSize: 24,
//         marginBottom: 31,
//     },
// });
// const start = 1900;
// const values = new Array(new Date().getFullYear() - start + 1)
//     .fill(0)
//     .map((_, i) => {
//         const value = start + i;
//         return { value, label: `${value}` };
//     })
//     .reverse();

// const PickerDemo = () => {
//     const defaultValue = 1990 - start;
//     return (
//         <Box style={theme.container}>
//             {/* <Typography style={theme.title}>What year were you born?</Typography> */}
//             <Picker {...{ values, defaultValue }} />
//         </Box>
//     );
// };

// export default PickerDemo;