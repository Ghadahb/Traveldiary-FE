// const _pickImage = async () => {
//     try {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],

//             quality: 1,
//         });

//         if (!result.cancelled) {
//             const localUri = result.uri;
//             const filename = localUri.split("/").pop();
//             const match = /.(\w+)$/.exec(filename);
//             const image = {
//                 uri: localUri,
//                 name: filename,
//                 type: match ? image/${match[1]} : image,
//             };
//             setTrip({ ...trip, image: image });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };