/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/atoms/Button';
import Input, { InputNumber } from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/Textarea';
import Form from 'components/organisms/Form';

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  content: string;
};

export const contactSchema = yup.object().shape({
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

export interface FormRegisterProps {
  consultancySystem?: ConsultancySystem;
}

const FormRegister: React.FC<FormRegisterProps> = ({
  consultancySystem,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const method = useForm<ContactForm>({
    resolver: yupResolver(contactSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      content: '',
    },
  });

  const handleSubmit = async (data: ContactForm) => {
    try {
      setIsLoading(true);
      await new Promise((res) => {
        setTimeout(() => {
          res(data);
        }, 500);
      });
    } catch (e) {
      // TODO: error
    } finally {
      method.reset();
      setIsLoading(false);
    }
  };

  return (
    <Form
      method={method}
      submitForm={(data) => handleSubmit && handleSubmit(data)}
    >
      <div className="o-form-register">
        <div className="o-form-register_title">
          <Text modifiers={['20x30', '700', 'center', 'white', 'uppercase']}>
            {consultancySystem?.title}
          </Text>
        </div>
        <div className="o-form-register_field">
          <Controller
            name="name"
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                modifiers={['dark']}
                placeholder={consultancySystem?.namePlaceholder}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="o-form-register_field">
          <Controller
            name="phone"
            render={({
              field,
              fieldState: { error },
            }) => (
              <InputNumber
                {...field}
                modifiers={['dark']}
                placeholder={consultancySystem?.phonePlaceholder}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="o-form-register_field">
          <Controller
            name="email"
            render={({
              field,
              fieldState: { error },
            }) => (
              <Input
                {...field}
                modifiers={['dark']}
                placeholder={consultancySystem?.emailPlaceholder}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="o-form-register_field">
          <Controller
            name="content"
            render={({
              field,
              fieldState: { error },
            }) => (
              <TextArea
                {...field}
                modifiers={['dark']}
                placeholder={consultancySystem?.contentPlaceholder}
                rows={4}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="o-form-register_button">
          <Button
            type="submit"
            loading={isLoading}
            modifiers="android-green"
          >
            {consultancySystem?.btnText}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FormRegister;
