import { atom } from 'recoil';

export const editableAtom = atom<boolean>({
    key: 'editableAtom',
    default: false,
});
