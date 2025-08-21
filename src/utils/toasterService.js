// src/utils/toastService.js
import { toast } from "react-toastify";

export const showSuccess = (msg) =>
    // console.log(msg);
  toast.success(msg, { position: "top-right", theme: "colored" });
export const addItemCart = (msg) =>
  toast.success(msg, { position: "top-right", theme: "colored" });

export const showError = (msg) =>
  toast.error(msg, { position: "top-right", theme: "colored" });

export const showInfo = (msg) =>
  toast.info(msg, { position: "top-right", theme: "colored" });

export const showWarning = (msg) =>
  toast.warning(msg, { position: "top-right", theme: "colored" });
