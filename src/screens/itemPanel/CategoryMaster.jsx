import {
  Button,
  Grid,
  Input,
  Stack,
  Typography,
  Container,
  Divider,
  TextField,
  MenuItem,
  Autocomplete,
  IconButton,
  Paper,
  useTheme,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Label from "@mui/icons-material/Label";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SendIcon from "@mui/icons-material/Send";
import TreeItem from "@mui/lab/TreeItem";
import TreeViewItemStyled from "components/styled/TreeViewItemStyled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PaperStyled from "components/styled/PaperStyled";
// import { ToastContainer,  } from "react-toastify";

import Axios from "axios";
import { getAllSuppliers, getCategories } from "api/apis";
import {
  Check,
  Add,
  CenterFocusStrongRounded,
  Clear,
  Close,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { UserContext } from "context/UserContext";

import React, { useContext, useEffect, useState } from "react";
import TextFieldStyled from "components/styled/TextFieldStyled";
import ContainerStyled from "components/styled/ContainerStyled";
import { TreeView } from "@mui/lab";
import { useSnackbar } from "notistack";

export default function CategoryMaster() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const theme = useTheme();
  const { darkMode, baseUrl } = useContext(UserContext);
  const [showField, setShowField] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [categoryID, setCategoryID] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  //item master states
  console.log(categoryData);

  const [categories, setCategories] = React.useState([]);
  const [subCategory, setSubCatogery] = React.useState("");

  // const handleToggle = (event, nodeIds) => {
  //   // setExpanded(nodeIds);
  // };

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        if (res) {
          if (res.data.status === true) {
            setCategories(res.data.data);
            setLoading(false);
          } else {
            enqueueSnackbar(
              "Something Went Wrong! Please Check All Fields Carefully",
              { variant: "error" }
            );
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        enqueueSnackbar(
          "Something Went Wrong! Please Check All Fields Carefully",
          { variant: "error" }
        );
        setLoading(false);
      });
  }, []);

  const handleCategory = (event) => {
    if (event.target.value === "") {
      setFilteredCategory(data);
    } else {
      const newData = data.filter((supplier) => {
        return supplier.supplierName.includes(event.target.value);
      });
      setFilteredCategory(newData);
    }
    setCategoryID(event.target.value);
  };
  useEffect(() => {
    if (categoryID === null || categoryID === "") return;
    getCategories(categoryID)
      .then((res) => {
        if (res.data.status === true) {
          setCategoryData(res.data.data);
          setLoading(false);
        } else {
          enqueueSnackbar(
            "Something Went Wrong! Please Check All Fields Carefully",
            { variant: "error" }
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        enqueueSnackbar(
          "Something Went Wrong! Please Check All Fields Carefully",
          { variant: "error" }
        );
        setLoading(false);
      });
  }, [categoryID]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            my: "1em",

            padding: 0,
          }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid>
              <PaperStyled elevation={0} sx={{ height: "100%", width: "100%" }}>
                <ContainerStyled
                  sx={{
                    padding: "2em 2em",

                    borderLeft: "7px solid #2f8deb",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                      {!categoryData === null ? (
                        <Typography variant="h6">No Category Found</Typography>
                      ) : (
                        <TreeView
                          aria-label="gmail"
                          defaultExpanded={["1"]}
                          defaultCollapseIcon={<ArrowDropDownIcon />}
                          defaultExpandIcon={<ArrowRightIcon />}
                          sx={{
                            height: 264,
                            flexGrow: 1,
                            maxWidth: 400,
                            overflowY: "auto",
                          }}
                        >
                          {categories.map((category, index) => {
                            return (
                              <>
                                <TreeViewItemStyled
                                  nodeId={category._id}
                                  key={index}
                                  labelText={category.categoryName}
                                  labelInfo={`${category.subCategory.length}`}
                                  labelIcon={CopyrightIcon}
                                >
                                  {category.subCategory.length > 0 && (
                                    <>
                                      {category.subCategory.map(
                                        (subCategory, index) => {
                                          return (
                                            <TreeViewItemStyled
                                              nodeId={subCategory._id}
                                              key={index++}
                                              labelText={
                                                subCategory.subCategoryName
                                              }
                                              labelIcon={
                                                SubdirectoryArrowRightIcon
                                              }
                                              color="#1a73e8"
                                              bgColor="#e8f0fe"
                                            />
                                          );
                                        }
                                      )}
                                    </>
                                  )}
                                </TreeViewItemStyled>
                              </>
                            );
                          })}
                        </TreeView>
                      )}
                    </Grid>
                  </Grid>
                </ContainerStyled>
              </PaperStyled>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={false}
                sm={false}
                md={12}
                lg={12}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                {/* <YourCard /> */}

                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "center",
                    opacity: "88%",
                    textDecoration: "underline",
                    color: `${darkMode ? "#ffffff" : "#181818"}`,
                  }}
                >
                  <Typography variant="h2">Item Master</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ minHeight: "40vh" }}>
                <PaperStyled
                  elevation={0}
                  sx={{
                    height: "100%",
                  }}
                >
                  {/* Side GRid */}
                  <ContainerStyled sx={{ py: 2 }}>
                    <Box>
                      <Typography
                        variant="h2"
                        sx={{ lineHeight: "1em" }}
                        align="right"
                      >
                        Item Details
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} light variant="left" />
                    {!showField ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            my: 2,
                            justifyContent: "center",
                          }}
                        >
                          <IconButton
                            sx={{
                              borderRadius: "15%",
                              backgroundColor: "transparent",
                              border: "1px solid rgba(255,255,255,0.5)",
                              p: 2,
                            }}
                            onClick={() => setShowField(!showField)}
                          >
                            <Add />
                          </IconButton>
                        </Box>

                        <Typography align="center" variant="subtitle1">
                          Add Category
                        </Typography>

                        <IconButton
                          sx={{
                            borderRadius: "15%",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(255,255,255,0.5)",
                            p: 2,
                          }}
                          onClick={() => setShowField(!showField)}
                        >
                          <Close />
                        </IconButton>
                        <IconButton
                          sx={{
                            borderRadius: "15%",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(255,255,255,0.5)",
                            p: 2,
                          }}
                          onClick={() => setShowField(!showField)}
                        >
                          <Check />
                        </IconButton>
                      </>
                    ) : (
                      <TextFieldStyled
                        label="Category"
                        onChange={(e) => setCategories(e.target.value)}
                      />
                    )}
                    <Divider sx={{ my: 1 }} light variant="left" />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        my: 2,
                      }}
                    >
                      {!showDropDown ? (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              my: 2,
                              justifyContent: "center",
                            }}
                          >
                            <IconButton
                              sx={{
                                borderRadius: "15%",
                                backgroundColor: "transparent",
                                border: "1px solid rgba(255,255,255,0.5)",
                                p: 2,
                              }}
                              onClick={() => setShowDropDown(!showDropDown)}
                            >
                              <Add />
                            </IconButton>
                          </Box>
                          <Typography align="center" variant="subtitle1">
                            Add Sub Category
                          </Typography>
                        </>
                      ) : (
                        <Autocomplete
                          freeSolo
                          fullWidth
                          onChange={(event, value) => {
                            if (value !== null) {
                              setCategories(value.split(",")[1]);
                            }
                          }}
                          options={filteredCategory.map(
                            (option, index) =>
                              index +
                              " " +
                              option.supplierName +
                              "," +
                              option._id
                          )}
                          renderInput={(params) => (
                            <TextFieldStyled
                              onChange={handleCategory}
                              {...params}
                              label="Category"
                            />
                          )}
                        />
                      )}
                      {showField && showDropDown ? (
                        <Stack direction="row" spacing={3}>
                          <Button onClick={() => setShowField(false)}>
                            DISCARD
                          </Button>
                          <Button>Create</Button>
                        </Stack>
                      ) : null}
                    </Box>
                  </ContainerStyled>
                </PaperStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
