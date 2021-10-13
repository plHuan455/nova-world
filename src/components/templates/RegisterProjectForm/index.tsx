import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Input, { InputNumber } from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/Textarea';
import Container from 'components/organisms/Container';
import Form from 'components/organisms/Form';
import { ContactForm } from 'components/organisms/FormRegister';
import { createConsultancyService } from 'services/consultancies';
import { useAppDispatch } from 'store/hooks';
import { openNotify } from 'store/notify';
import registerSchema from 'utils/schemas';

interface RegisterProjectFormProps {
  consultancySystem?: ConsultancySystem;
}

const RegisterProjectForm: React.FC<RegisterProjectFormProps> = ({
  consultancySystem,
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { t } = useTranslation('translation');

  const method = useForm<ContactForm>({
    resolver: yupResolver(registerSchema(t)),
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
      if (!executeRecaptcha) return;
      const tokenRecaptcha = await executeRecaptcha('submit');
      await createConsultancyService({
        ...data,
        grecaptchaToken: tokenRecaptcha,
      });
      method.reset();
      dispatch(openNotify({ type: 'success', message: t('notify.success') }));
    } catch (error) {
      dispatch(openNotify({ type: 'warning', message: t('notify.fail') }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="t-registerprojectform">
      <Container>
        <div className="t-registerprojectform_wrap">
          <div className="t-registerprojectform_content">
            <Text modifiers={['20x32', 'sm', 'cyanCobaltBlue', 'center', 'uppercase', '700']}>
              {consultancySystem?.title}
            </Text>
            <div className="t-registerprojectform_form">
              <Form method={method} submitForm={handleSubmit}>
                <div className="t-registerprojectform_fields">
                  <div className="t-registerprojectform_left">
                    <div className="t-registerprojectform_name">
                      <Controller
                        name="name"
                        render={({ field, fieldState }) => (
                          <Input
                            {...field}
                            placeholder={consultancySystem?.namePlaceholder}
                            error={fieldState.error?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="t-registerprojectform_phone">
                      <Controller
                        name="phone"
                        render={({ field, fieldState }) => (
                          <InputNumber
                            {...field}
                            placeholder={consultancySystem?.phonePlaceholder}
                            error={fieldState.error?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="t-registerprojectform_email">
                      <Controller
                        name="email"
                        render={({ field, fieldState }) => (
                          <Input
                            {...field}
                            placeholder={consultancySystem?.emailPlaceholder}
                            error={fieldState.error?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="t-registerprojectform_right">
                    <Controller
                      name="content"
                      render={({ field, fieldState }) => (
                        <TextArea
                          {...field}
                          placeholder={consultancySystem?.contentPlaceholder}
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="t-registerprojectform_btn">
                  <Button type="submit" loading={isLoading}>
                    {consultancySystem?.btnText}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterProjectForm;
