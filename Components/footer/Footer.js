// import React from "react";
// import {
//   NativeBaseProvider,
//   Box,
//   Text,
//   Heading,
//   VStack,
//   FormControl,
//   Input,
//   Link,
//   Button,
//   Icon,
//   HStack,
//   Center,
//   Pressable,
//   View,
//   Fab,
//   useToast
// } from "native-base";
// import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
// import authStore from "../../store/authStore";
// import { observer } from "mobx-react";
// import { useState } from "react";
// import Signin from "../authentication/Signin";


// function Footer ({ navigation }) {
//   const [selected, setSelected] = React.useState(1);
//   const [user, setUser] = useState({
//     username: "",
//     password: "",
// });

// const handleSubmit = () => {
//   authStore.signOut(navigation);
//   navigation.replace("Signin");
// };

//   return (
//       <View>
//     <NativeBaseProvider>
//       <Box flex={1} 
//       bg="white" 
//       safeAreaTop
//       bottom="0"
//       left="0"
//       right="0"
//       // find alternative
//       // bottom-tab navigatior react nav
//       position="fixed"
//       backgroundColor="#1e90ff"

//       >
//         <Center flex={1}></Center>
//         <HStack 
//         bg="indigo.600" 
//         alignItems="center" 
//         safeAreaBottom shadow={6}
//         backgroundColor="#1e90ff">
//           <Pressable
//             // cursor="pointer"
//             opacity={selected === 0 ? 1 : 0.5}
//             py="3"
//             flex={1}
//             onPress={() => setSelected(0)}
//           >
//             <Center>
              
//               <Icon
//                 mb="1"
//                 as={<MaterialCommunityIcons name="logout-variant" />
                  
//                 }
//                 color="white"
//                 size="sm"
//                 onPress= {handleSubmit}
                
                
//                 // onPress={() => navigation.navigate("Signin")}
                
//               />
//               <Text
//               color="white" 
//               ontSize="12"
//              >
//                {/* {`Hello ${
//                 authStore.user
//                   ? authStore.user.username
//                   : "sign in"
//                   }`} */}
//               Logout
//               {/* { authStore.user.username} */}
//                {/* {`Logout ${authStore.user.username}`} */}
//               </Text>
//             </Center>
//           </Pressable>
//           <Pressable
//             // cursor="pointer"
//             opacity={selected === 1 ? 1 : 0.5}
//             py="2"
//             flex={1}
//             onPress={() => setSelected(1)}
//           >
//             <Center>
//               <Icon
//                 mb="1"
//                 as={<MaterialIcons name="search" />}
//                 color="white"
//                 size="sm"
//               />
//               <Text color="white" fontSize="12">
//                 Search
//               </Text>
//             </Center>
//           </Pressable>
//           <Pressable
//             // cursor="pointer"
//             opacity={selected === 2 ? 1 : 0.6}
//             py="2"
//             flex={1}
//             onPress={() => setSelected(2)}
//           >

//             <Center>
//               <Icon
//                 mb="1"
//                 as={<MaterialCommunityIcons name="wallet-travel" /> }
//                 color="white"
//                 size="sm"
//                 />
//               <Text color="white" font="12">
//                 Browse
//               </Text>
//             </Center>
//           </Pressable>
//           <Pressable
//             // cursor="pointer"
//             opacity={selected === 3 ? 1 : 0.5}
//             py="2"
//             flex={1}
//             onPress={() => setSelected(3)}
//           >
//             <Center>
//               <Icon
//                 mb="1"
//                 as={<MaterialCommunityIcons name="account-outline" />}
//                 color="white"
//                 size="sm"
//               />
//               <Text color="white" fontSize="12">
//                 Profile
//               </Text>
//             </Center>
//           </Pressable>
//         </HStack>
//       </Box>
//     </NativeBaseProvider>
//     </View>
//   );
// }

// export default observer(Footer);