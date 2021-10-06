import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Controller, useForm } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Input, { InputNumber } from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/Textarea';
import Form from 'components/organisms/Form';
import { createContactStoreService } from 'services/contact';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { openNotify } from 'store/notify';
import registerSchema from 'utils/schemas';

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  content: string;
};

export interface FormRegisterProps {
  consultancySystem?: ConsultancySystem;
}

const FormRegister: React.FC<FormRegisterProps> = ({
  consultancySystem,
}) => {
  const { utm } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const method = useForm<ContactForm>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
  });

  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (data: ContactForm) => {
    try {
      setIsLoading(true);
      if (!executeRecaptcha) return;
      const tokenRecaptcha = await executeRecaptcha('submit');
      await createContactStoreService({
        ...data,
        grecaptchaToken: tokenRecaptcha,
        ...(utm?.data || {}),
      });
      dispatch(openNotify({ type: 'success', message: 'Đăng ký thành công' }));
      method.reset();
    } catch {
      dispatch(openNotify({ type: 'warning', message: 'Đăng ký không thành công' }));
    } finally {
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
