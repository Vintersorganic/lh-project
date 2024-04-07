import { SnackbarState } from '@/utils/types';
import { create } from 'zustand';

const useSnackbarStore = create<SnackbarState>((set) => ({
    snackbar: null,
    severity: 'success',
    snackbarPosition: { vertical: 'top', horizontal: 'center' },
    showSnackbar: (message, severity) =>
        set(() => ({
            snackbar: { message, key: Date.now(), severity },
        })),
    hideSnackbar: () =>
        set(() => ({
            snackbar: null,
        })),
}));

export default useSnackbarStore;
