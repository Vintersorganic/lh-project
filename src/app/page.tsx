'use client'
import useSnackbarStore from "@/stores/snackbarStore";
import BasicTable from "../components/BasicTable";
import SnackbarAlert from "@/components/SnackbarAlert";

export default function Home() {
  const { snackbar, hideSnackbar, snackbarPosition, severity } = useSnackbarStore();  

  return (
    <>
      <BasicTable />
      <SnackbarAlert
        open={!!snackbar}
        message={snackbar?.message}
        severity={severity}
        onClose={hideSnackbar}
        position={snackbarPosition}
      />
    </>
  );
}
