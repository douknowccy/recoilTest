import {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {useRecoilState, useSetRecoilState} from 'recoil'
import {LanguageSelector} from './App'
import {LOCALES} from './locale'
import axios from 'axios'
const Test = () => {
    const intl = useIntl()
    const [language, setLanguage] = useRecoilState(LanguageSelector)

    return (
        <div>
            {intl.formatMessage({
                id: 'test',
            })}

            <ul>
                <li onClick={() => setLanguage(LOCALES.ENGLISH)}>{intl.formatMessage({id: 'setEn'})}</li>
                <br />
                <li onClick={() => setLanguage(LOCALES.FRENCH)}>{intl.formatMessage({id: 'setFR'})}</li>
                <br />
                <li onClick={() => setLanguage(LOCALES.VN)}>{intl.formatMessage({id: 'setVN'})}</li>
            </ul>
        </div>
    )
}

export default Test
