import Swal from "sweetalert2";

// Shared base config applied to all alerts on the site
const baseConfig = {
  background: "rgba(251,249,244,0.95)",
  color: "#1b1c19",
  customClass: {
    popup: "swal-care-popup",
    title: "swal-care-title",
    confirmButton: "swal-care-confirm",
  },
};

/**
 * Show a standardized error alert.
 * @param {object} options
 * @param {string} options.title         - Alert heading
 * @param {string} [options.text]        - Body message
 * @param {string} [options.confirmButtonText] - Button label (default: "Try Again")
 */
export const showErrorAlert = ({ title, text, confirmButtonText = "Try Again" }) => {
  return Swal.fire({
    ...baseConfig,
    icon: "error",
    iconColor: "#ba1a1a",
    confirmButtonColor: "#34285a",
    title,
    text,
    confirmButtonText,
  });
};

/**
 * Show a standardized success alert.
 * @param {object} options
 * @param {string} options.title         - Alert heading
 * @param {string} [options.text]        - Body message (plain text)
 * @param {string} [options.html]        - Body message (HTML, overrides text)
 * @param {string} [options.confirmButtonText] - Button label (default: "OK")
 */
export const showSuccessAlert = ({ title, text, html, confirmButtonText = "OK" }) => {
  return Swal.fire({
    ...baseConfig,
    icon: "success",
    iconColor: "#153721",
    confirmButtonColor: "#2c4e37",
    title,
    text,
    html,
    confirmButtonText,
  });
};
