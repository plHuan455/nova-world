import * as yup from 'yup';

const phoneRegExp = /^\d+$/;

const registerSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên'),
  content: yup.string().required('Vui lòng nhập nội dung'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
});

export default registerSchema;
