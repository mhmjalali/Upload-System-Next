//////****** usage document ******/////////
// 1.) use <UploadSystem /> component inside your page
// 2.) list of props that you need to send is down below
// 2.1) selectedImage // this value come from useState that you need to write on your own component
// 2.2) handleUploadChange // use on your own component (explain below more) you should set it to {(e) =>handleUploadChange[your special name]](e, props.setFieldValue)}
// 2.3) setFieldValue // for setting value of file to null when user click on Delete button. you should set it to {props.setFieldValue}
// 2.4) fieldname   name that file field has on your formik initialValues.
// 2.5) fileType // type of your file shows its document image etc...
// 2.6) imageAlt // alt of your image.
// 2.7) imageSize // this is size of your image box and value type is like that imageSize={ [width , height] }.
// 2.9) setselectedImage // for making box empty when user click on delete button (explain below more)

// const [selectedImage[your special name]], setSelectedImage[your special name]] = useState(
//  "/images/upload-image.svg" // default image
// );
// const [fileType[your special name], setFileType[your special name]] = useState(null);
// const [fileName[your special name], setFileName[your special name]] = useState(null);


// const handleUploadChange[your special name]] = (event, setFieldValue) => {
//   const uploadedFile = event.target?.files?.[0];
//   const fileType = event.target.files[0].type;
//   const fileName = event.target.files[0].name;
//   if (uploadedFile) { // just check file is uploaded or not
//     setSelectedImage[your special name]](URL.createObjectURL(uploadedFile)); // set image value
//     setFileType[your special name]](fileType); // set fileType
//     setFileName[your special name]](fileName); // set fileName
//     setFieldValue("[your special name]]_img", uploadedFile); set field value for sending data (this automaticaly append value in initial state)
//   }
// };
//////****** end usage document ******/////////
