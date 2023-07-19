import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRef } from "react";

const UploadSystem = ({
  selectedImage,
  setselectedImage,
  handleUploadChange,
  fieldname,
  setFieldValue,
  imageAlt,
  imageSize,
  fileType,
  fileName,
  label,
}) => {
  const t = useTranslations();
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleDeleteImage = () => {
    setselectedImage("/images/upload-image.svg");
    setFieldValue(fieldname, null);
  };

  const isDocumentFormat = (fileType) => {
    const documentFormats = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    return documentFormats.includes(fileType);
  };

  return (
    <Box sx={{ width: imageSize[0], my: 2 }}>
      <Typography
        margin={2}
        sx={{
          fontWeight: 500,
          fontSize: "1rem",
          color: "#a19d9d",
        }}
        textAlign="center"
      >
        {label}
      </Typography>
      {selectedImage === "/images/upload-image.svg" ? (
        <Image
          width={imageSize[0]}
          height={imageSize[1]}
          src={selectedImage}
          priority
          alt={imageAlt}
          onClick={handleClick}
          style={{
            cursor: "pointer",
            objectFit: "contain",
            border: "1px dashed #e1e1e1",
            borderBottom: "unset",
            padding: "5px",
          }}
        />
      ) : fileType && fileType.startsWith("image/") ? (
        <Image
          width={imageSize[0]}
          height={imageSize[1]}
          src={selectedImage}
          priority
          alt={imageAlt}
          onClick={handleClick}
          style={{
            cursor: "pointer",
            objectFit: "contain",
            border: "1px dashed #e1e1e1",
            borderBottom: "unset",
            padding: "5px",
          }}
        />
      ) : (
        fileType &&
        isDocumentFormat(fileType) && (
          <Box
            sx={{
              width: imageSize[0],
              height: imageSize[1],
              display: "flex",
              border: "1px dashed #e1e1e1",
              borderBottom: "unset",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleClick}
          >
            <Typography
              margin={2}
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "#a19d9d",
              }}
              textAlign="center"
            >
              {fileName}
            </Typography>
          </Box>
        )
      )}

      <TextField
        id="avatar-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleUploadChange}
        inputRef={fileInputRef}
      />
      <Button
        sx={{
          width: "100%",
          borderTopLeftRadius: "unset",
          borderTopRightRadius: "unset",
        }}
        color="error"
        disabled={selectedImage === "/images/upload-image.svg"}
        endIcon={<DeleteForeverIcon />}
        variant="contained"
        onClick={handleDeleteImage}
      >
        {t("delete")}
      </Button>
    </Box>
  );
};

export default UploadSystem;
