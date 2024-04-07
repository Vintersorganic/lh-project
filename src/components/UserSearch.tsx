// There's no search endpoint so this is a poor attempt to recreate a search bar.
// No need to debounce anything as it is cached.
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/services/users";
import { ApiResponseListUsers, User } from "@/utils/types";
import { Autocomplete, TextField, Container } from "@mui/material";
import Link from "next/link";

export default function UserSearch() {
  const { data: users, isLoading } = useQuery<ApiResponseListUsers, Error>({
    queryKey: ["allUsers"],
    queryFn: fetchAllUsers,
  });

  const userOptions: User[] = users?.data ?? [];

  if (isLoading) return null;

  return (
    // Would add a search icon and a little modal for mobile devices probably
    <Container
      disableGutters
      sx={{ width: 300, display: { xs: "none", sm: "block" } }}
    >
      <Autocomplete
        options={userOptions}
        freeSolo
        getOptionLabel={(option) =>
          typeof option === "string"
            ? option
            : `${option.first_name} ${option.last_name}`
        }
        size="small"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="Search Users" variant="outlined" />
        )}
        renderOption={(props, option: User) => (
          // Would be good to have a Link component with a style reset.
          <li {...props} key={option.id}>
            <Link
              href={`/users/${option.id}`}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "400",
              }}
            >
              {`${option.first_name} ${option.last_name}`}
            </Link>
          </li>
        )}
      />
    </Container>
  );
}
