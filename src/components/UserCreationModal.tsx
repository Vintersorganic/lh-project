// Ideally, separate API logic and state management for cleaner, more maintainable code.
// But I'll keep it simpler for the sake of the test.
"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { createUser } from "@/services/users";
import { FormFields, UserSchema } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import useSnackbarStore from "@/stores/snackbarStore";

interface UserCreationModalFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function UserCreationModalForm({
  open,
  handleClose,
}: UserCreationModalFormProps) {
  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<FormFields>({
    mode: "onBlur",
    shouldFocusError: false,
    resolver: zodResolver(UserSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (newUser: FormFields) => createUser(newUser),
    onSuccess: (data) => {
      showSnackbar(
        `User ${data.first_name} ${data.last_name} created successfully.`,
        "success"
      );
      // It would be good to redirect the user to users/[id] to show the newly created user.
      handleClose();
      reset(); // Reset form fields
    },
    onError: (error: any) => {
      showSnackbar(
        `Failed to create user: ${error?.message || "Unknown error"}`,
        "error"
      );
    },
  });

  const onSubmit = (data: FormFields) => {
    mutate(data);
  };

  const handleCloseAndReset = () => {
    handleClose();
    reset();
  };

  useEffect(() => {
    if (open) {
      // Using autofocus on the TextField triggered the validation when the modal was opened.
      // For better user experience we want them to save one click but also to show the validation
      // only when needed so this is a good workaround for that.
      requestAnimationFrame(() => {
        setFocus("first_name");
      });
    }
  }, [open, setFocus]);

  return (
    <Dialog open={open} onClose={handleCloseAndReset}>
      <DialogTitle>Create New User</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent>
          <TextField
            margin="dense"
            label="First Name"
            fullWidth
            {...register("first_name")}
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            {...register("last_name")}
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndReset}>Cancel</Button>
          <Button type="submit" color="primary" disabled={isSubmitting}>
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
