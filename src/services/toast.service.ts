import { toast } from 'react-toastify';

//link: https://github.com/fkhadra/react-toastify
const toastOptions: any = {
  position: 'top-right',
  autoClose: 6000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  className: 'toastify-linebreak'
};

const notify = (message: string) => {
  return toast(message, toastOptions);
};

const error = (message?: string) => {
  return toast.error(message || '실패한', toastOptions);
};

const success = (message?: string) => {
  return toast.success(message || '성공', toastOptions);
};

const info = (message: string) => {
  return toast.info(message, toastOptions);
};

const warn = (message: string) => {
  return toast.warn(message, toastOptions);
};

const clear = () => {
  return toast.dismiss();
};

const Toastconfig = { notify, error, success, info, warn, clear };

export default Toastconfig;
