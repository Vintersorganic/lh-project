'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

// Define later
interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
}

// Mock data
const users: User[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://i.pravatar.cc/300?img=1',
    },
];

export default function UsersCard() {
    const pathname = usePathname();
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const userId = pathname.split('/').pop();
        const userData = users.find((user) => user.id === userId);
        setUser(userData);
    }, [pathname]);

    if (!user) {
        return <Typography variant="h5">User not found</Typography>;
    }

    return (
        <Card raised sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar src={user.profilePicture} sx={{ width: 150, height: 150, mt: 2 }} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5">
                    {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2">{user.email}</Typography>
            </CardContent>
        </Card>
    );
}
