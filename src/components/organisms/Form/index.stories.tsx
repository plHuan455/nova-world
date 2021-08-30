import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Form from '.';

import Input from 'components/atoms/Input';

export default {
  title: 'Components/organisms/Form',
  component: Form,
  argTypes: {},
} as Meta;

export type TestForm = {
  test: number;
};
const validationSchema = yup.object({
  test: yup.number().required(),
});
/* eslint-disable */
// eslint-disable-next-line react-hooks/rules-of-hooks
const method = useForm<TestForm>({
  resolver: yupResolver(validationSchema),
  mode: 'onSubmit',
});

export const normal: Story = () => {
  const onSubmit = (data: TestForm) => {
    console.log(data);
  };
  return (
    <Form<TestForm> submitForm={onSubmit} method={method}>
      <Controller
        name="test"
        render={({
          field: {
            onChange, value, ref,
          },
          fieldState: { error },
        }) => (
          <Input
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder="Placeholder"
            error={error?.message}
          />
        )}
      />
    </Form>
  );
};
