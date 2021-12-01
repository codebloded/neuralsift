import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export const menu = [
  {
    icon: <HomeOutlinedIcon fontSize="medium" />,
    title: "Supplier Panel",
    slug: "supplier",
    items: [
      {
        title: "Supplier Master",
        link: "/supplier/master",
      },
      {
        title: "Supplier Data",
        link: "/supplier/data",
      },
    ],
  },
  {
    icon: <LocalLibraryOutlinedIcon fontSize="medium" />,
    link: "/item/master",
    title: "Item Panel",
    slug: "item",
    items: [
      {
        title: "Item Master",
        link: "/item/master",
      },
      {
        title: "Item Data",
        link: "/item/data",
      },
    ],
  },
  {
    icon: <TrendingUpOutlinedIcon fontSize="medium" />,
    title: "Purchase Orders",
    slug: "po",
    items: [
      {
        title: "Pending PO's",
        link: "/po/pending",
      },
      {
        title: "Approved PO's",
        link: "/po/approved",
      },
      {
        title: "Unverified PO's",
        link: "/po/unverified",
      },
      {
        title: "Generate PO",
        link: "/po/master",
      },
    ],
  },
  {
    icon: <DescriptionOutlinedIcon fontSize="medium" />,
    title: "Branch Panel",
    slug: "branch",
    items: [
      {
        title: "Create Branch",
        link: "/branch/master",
      },
      {
        title: "Edit / View Branches",
        link: "/branch/data",
      },
    ],
  },
  {
    icon: <AccountCircle fontSize="medium" />,

    title: "User Panel",
    slug: "user",
    items: [
      {
        title: "New User",
        link: "/user/new",
      },
      {
        title: "Update / Delete User",
        link: "/user/data",
      },
    ],
  },
];
