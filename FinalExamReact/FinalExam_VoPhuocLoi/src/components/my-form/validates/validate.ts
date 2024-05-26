import * as Yup from 'yup';

const regexphone = /^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/;
const regexUppercase = /^[A-Z][a-zA-Z0-9]*$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const editUserSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'ki tu phai từ hai ký tự trở lên!')
        .max(50, 'Tối đa 50 kí tự !')
        .required('Required'),
    phone: Yup.string()
        //      .matches(regexphone, 'Số điện thoại không hợp lệ!')
        .required('Required'),
    address: Yup.string()
        // .matches(
        //     regexUppercase,
        //     'Làm ơn nhập vào đúng định dạng chữ đầu tiên in hoa!'
        // )
        .max(100, 'Tối đa 100 kí tự !')
        .required('Required'),
    email: Yup.string()
        .required('Required')
        .matches(regexEmail, 'Định dạng Email không hợp lệ !')
});
