'use client'
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const createDummyUser = (id: number, firstName: string, lastName: string, email: string) => {
  return {
    id,
    profilePicture: `https://i.pravatar.cc/150?img=${id}`,
    firstName,
    lastName,
    email,
  };
};

const rows = [
  createDummyUser(17, 'John', 'Doe', 'john.doe@example.com'),
  createDummyUser(31, 'Jane', 'Roe', 'jane.roe@example.com'),
  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),
  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

  createDummyUser(51, 'Alex', 'Smith', 'alex.smith@example.com'),

];

export default function UserListPage() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile Picture</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.profilePicture} />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{user.firstName}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{user.lastName}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
