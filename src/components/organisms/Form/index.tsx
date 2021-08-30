/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface FormInterface<T> {
  method: UseFormReturn<T>;
  submitForm: SubmitHandler<T>;
}

class Form<T> extends React.Component<FormInterface<T>> {
  render() {
    const { method, submitForm, children } = this.props;

    return (
      <div className="o-form">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(submitForm)} noValidate>
            {children}
          </form>
        </FormProvider>
      </div>
    );
  }
}

export default Form;
