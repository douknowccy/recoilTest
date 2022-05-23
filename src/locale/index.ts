import en from './en'
import fr from './fr'
import vn from './vn'
export enum LOCALES {
    ENGLISH = 'en-US',
    FRENCH = 'fr-FR',
    VN = 'vi-VN',
}

export const messages = {
    [LOCALES.ENGLISH]: {
        ...en,
    },
    [LOCALES.FRENCH]: {
        ...fr,
    },
    [LOCALES.VN]: {
        ...vn,
    },
}
