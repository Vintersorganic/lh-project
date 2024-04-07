import { z, ZodType } from "zod";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material/Alert";

// We'll have all types and interfaces here just for the sake of this test

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ApiResponseListUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface ApiResponseSingleUser {
  data: User;
}

export type FormFields = Omit<User, "id" | "avatar">;

export const UserSchema: ZodType<FormFields> = z.object({
  first_name: z.string().min(3, { message: "First name is required" }),
  last_name: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export interface SnackbarState {
  snackbar: { message: string; key: number } | null;
  severity: AlertColor;
  snackbarPosition: SnackbarOrigin;
  showSnackbar: (message: string, severity: string) => void;
  hideSnackbar: () => void;
}
