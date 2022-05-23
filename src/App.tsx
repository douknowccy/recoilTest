import {LOCALES, messages} from './locale'
import {IntlProvider} from 'react-intl'
import {atom, useRecoilValue, selector, useRecoilValueLoadable} from 'recoil'
import produce from 'immer'
import Test from './Test'
import axios from 'axios'
import {Suspense} from 'react'
interface LanguageAtomType {
    locale: LOCALES
    other: string
    he: number
}

export const LanguageAtom = atom<LanguageAtomType>({
    key: 'LanguageState',
    default: {
        locale: LOCALES.ENGLISH,
        other: 'other',
        he: 121,
    },
})
export const LanguageSelector = selector<LOCALES>({
    key: 'LanguageSelector',
    get: ({get}) => {
        const locale = get(LanguageAtom)
        return locale.locale
    },
    set: ({set, get}, locale) => {
        set(
            LanguageAtom,
            produce((draft) => {
                draft.locale = locale
            }),
        )
    },
})

const mySelector = selector({
    key: 'mySelector',
    get: async ({get}) => {
        return await axios.get('https://randomuser.me/api/')
    },
})
const myAtom = atom({
    key: 'myAtom',
    default: mySelector,
})
export const App = () => {
    const {locale} = useRecoilValue(LanguageAtom)
    useRecoilValue(myAtom)

    return (
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
            <Test />
        </IntlProvider>
    )
}
