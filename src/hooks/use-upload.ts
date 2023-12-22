import { useMutation } from '@tanstack/react-query';
import Toastconfig from '~/services/toast.service';
import { upload } from '~/services/upload.service';

export const useUpload = ({ onSuccess, onSettled }: any) => {
    const uploadData = (data: any) => upload(data);
    return useMutation({
        mutationFn: uploadData,
        onSuccess: (data) => {
            data.status && Toastconfig.success();
            onSuccess && onSuccess(data?.data);
        },
        onSettled: () => onSettled && onSettled(),
    });
};
