/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Input, { InputNumber } from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/Textarea';
import Container from 'components/organisms/Container';
import Form from 'components/organisms/Form';
import registerSchema from 'utils/schemas';

interface FormRegister {
  name: string;
  content: string;
  phone: string;
  email: string;
}

interface RegisterProjectFormProps {
}

const RegisterProjectForm: React.FC<RegisterProjectFormProps> = () => {
  const method = useForm<FormRegister>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
  });
  const handleSubmit = useCallback(
    (data: FormRegister) => {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    [],
  );
  return (
    <div className="t-registerprojectform">
      <Container>
        <div className="t-registerprojectform_wrap">
          <div className="t-registerprojectform_content">
            <Text modifiers={['20x32', 'sm', 'cyanCobaltBlue', 'center', 'uppercase', '700']}>
              ĐĂNG KÝ TƯ VẤN THÔNG TIN DỰ ÁN
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
                            placeholder="Họ & Tên"
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
                            placeholder="Điện thoại"
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
                            placeholder="Email"
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
                          placeholder="Nội dung"
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="t-registerprojectform_btn">
                  <Button type="submit">
                    ĐĂNG KÝ
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
