import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import pt from './pt.json'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources:{
        en: {
            ...en
        },
        pt: {
            ...pt
        }
    },
    lng: 'pt'
})

export default i18n;