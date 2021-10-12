import { TFunction } from 'react-i18next';
import * as yup from 'yup';

const registerSchema = (t:TFunction<'translation'>) => yup.object().shape({
  name: yup.string().required(t('form.required_information')),
  email: yup
    .string()
    .email(t('form.invalid_email'))
    .required(t('form.required_information')),
  phone: yup
    .string()
    .required(t('form.required_information'))
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, t('form.invalid_phone')),
  content: yup.string().required(t('form.required_information')),
});

export default registerSchema;
