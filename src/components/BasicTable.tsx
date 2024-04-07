'use client'
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  TablePagination,
  Fade,
  Box
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link'
import { fetchUsersPaginated } from '@/services/users';
import { useEffect, useState } from 'react';
import { ApiResponseListUsers, User } from '@/utils/types';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { generatePaginationOptions } from '@/utils/helpers';

export default function UserListPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const { data: userList, error, isPending } = useQuery<ApiResponseListUsers, Error>({
    queryKey: ['users', page, rowsPerPage],
    queryFn: () => fetchUsersPaginated(page + 1, rowsPerPage),
    placeholderData: keepPreviousData,
  });

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset back to the first page with the new number of rows
  };

  useEffect(() => {
    // Reset scroll to top to maintain user orientation when changing rows per page in the table
    window.scrollTo(0, 0);
  }, [rowsPerPage]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;

  return (
    <Fade in={true} timeout={500}>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Profile Picture</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>View Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList?.data.map((user: User) => (
                <TableRow key={user.id}>
                  <TableCell >
                    <Avatar alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{user.first_name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{user.last_name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Profile">
                      <IconButton component={Link} href={`/users/${user.id}`}>
                        <AccountCircleIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={generatePaginationOptions(userList.total)}
          component="div"
          count={userList?.total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Fade>
  );
}
