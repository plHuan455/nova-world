import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required('Thông tin bắt buộc'),
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Thông tin bắt buộc'),
  phone: yup
    .string()
    .required('Thông tin bắt buộc')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
  content: yup.string().required('Thông tin bắt buộc'),
});

export default registerSchema;
