import { toast } from "react-toastify";

export const toastPrimaryCategories = {
  position: "top-right",
  autoClose: 3000,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
};

export const toastFontStyle = {
  fontFamily: "Inter",
  fontSize: "1.6rem",
  fontWeight: 500,
  letterSpacing: "0.75px",
  color: "#1a1d2c",
};

export const loginSuccessToast = () => {
  console.log("Login Success");
  toast.success("Signed in successfully", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};

export const loginFailedToast = (errorMessage) => {
  toast.error("Login failed. Please check your credentials.", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};

export const signupSuccessToast = () => {
  toast.success("Account created successfully!", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};

export const signupFailedToast = (errorMessage) => {
  toast.error("Signup failed. Please try again later.", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};

export const ticketPurchaseError = () => {
  toast.error("Sorry, couldn't complete your purchase", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};

export const purchaseCompletion = (tickets) => {
  toast.success("🎉Congratulations on your purchase!", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });

  toast.success(`Your ticket ID:${tickets.join(",")}`, {
    position: "top-right",
    autoClose: 8000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
    style: toastFontStyle,
  });
};

export const adminMovieToast = () => {
  toast.success("Movie Added Successfully", {
    ...toastPrimaryCategories,
    theme: "light",
    style: toastFontStyle,
  });
};

export const adminShowtimeToast = () => {
  toast.success("Showtime Added Successfully", {
    ...toastPrimaryCategories,
    theme: "light",
    style: toastFontStyle,
  });
};

export const adminShowninToast = () => {
  toast.success("Showtime Slot updated Successfully", {
    ...toastPrimaryCategories,
    theme: "light",
    style: toastFontStyle,
  });
};

export const adminErrorToast = () => {
  toast.error("Couldn't update. Please try again!", {
    ...toastPrimaryCategories,
    theme: "colored",
    style: toastFontStyle,
  });
};
