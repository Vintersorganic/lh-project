// With a bit more time would probably add something like react-swippeable to hide the arrows on mobile but change users by swipping.
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Fade,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { ApiResponseSingleUser } from "@/utils/types";

interface UsersCardProps {
  user?: ApiResponseSingleUser;
  onUserChange: (direction: "next" | "previous") => void;
}

const UsersCard: React.FC<UsersCardProps> = ({ user, onUserChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Button
        sx={{
          display: { xs: "none", sm: "block" },
          mr: 1,
          color: "primary.main",
        }}
        onClick={() => onUserChange("previous")}
      >
        <ArrowBackIosIcon />
      </Button>
      <Fade in={true} timeout={800}>
        <Card raised sx={{ width: 360, textAlign: "center" }}>
          <Box
            sx={{
              position: "relative",
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={user?.data.avatar} sx={{ width: 120, height: 120 }} />
          </Box>
          <CardContent>
            <Typography variant="h5" component="div">
              {user?.data.first_name} {user?.data.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.data.email}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="/" passHref>
                <Button variant="contained" color="primary">
                  Back to List
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Fade>
      <Button
        sx={{
          display: { xs: "none", sm: "block" },
          ml: 1,
          color: "primary.main",
        }}
        onClick={() => onUserChange("next")}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

export default UsersCard;
