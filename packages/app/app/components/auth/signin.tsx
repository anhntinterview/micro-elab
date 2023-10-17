'use client';

import Input from '@app/app/template/component/Input';
import { useElementContext } from '@app/app/template/context/element.provider';
import { LoginBodyDataValidation } from '@app/app/template/entity/auth.entity';
import { plainToInstance } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';
import { isArray } from 'lodash';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export interface ISignInForm {}

const SignInForm: React.FunctionComponent<ISignInForm> = (props) => {
  const {
    globalAuthProps: { login },
  } = useElementContext();
  const [formData, setFormData] = useState(new LoginBodyDataValidation());
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return plainToInstance(LoginBodyDataValidation, {
        ...prevData,
        [name]: value,
      });
    });

    validateField(name, value, (res: ValidationError[] | {}) => {
      if (isArray(res)) {
        res.map((item: ValidationError) => {
          if (item.constraints) {
            const error = Object.values(item.constraints)[0];
            setValidationErrors((prevState) => {
              return {
                ...prevState,
                [item.property]: error,
              };
            });
          }
        });
      } else {
        setValidationErrors({
          email: '',
          password: '',
        });
      }
    });
  };

  const validateField = async (
    fieldName: string,
    value: string,
    callback: (res: ValidationError[] | {}) => void
  ) => {
    const fieldObject = { [fieldName]: value };
    const formObject = plainToInstance(LoginBodyDataValidation, {
      ...formData,
      ...fieldObject,
    });

    try {
      const errors = await validate(formObject, {
        skipMissingProperties: true,
      });

      if (errors.length > 0) {
        errors;
        callback(errors);
      } else {
        callback({});
      }
    } catch (error) {
      // handle error (if any)
      console.error(error);
    }
  };

  // Handle submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    try {
      await validate(formData);
      // Submit the form if validation passes -> isButtonDisabled method
      // At here, we have 2 conditions which support clicking form
      // 1. Button was disabled and it has to pass condition validate
      // 2. The form has to clicking
      if (isFormSubmitted) {
        login({enable: true})!.mutate(formData);
      }
    } catch (errors: any) {
      console.log(`errors in handleSubmit: `, errors);
    }
  };

  console.log(`@@ formData: `, formData);
  console.log(`@@ validationErrors: `, validationErrors);
  console.log(`@@ validationErrors: `, validationErrors);

  // disable button
  const isButtonDisabled = Object.values(validationErrors).some((error) => error !== '');

  // control session
  // router

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1 className="custom-title global-title">Welcome back!</h1>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{validationErrors.email}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{validationErrors.password}</span>
        </div>
        <button
          disabled={isButtonDisabled}
          className={`global-button button-clone ${
            isButtonDisabled ? 'disable' : ''
          }`}
          type="submit"
        >
          Log In
        </button>
      </form>
      {/* <form data-members-form="signin" onSubmit={handleFormSubmit}>
      <h1 className="custom-title global-title">Welcome back!</h1>
      <input
        data-members-email=""
        type="email"
        placeholder="Your email address"
        aria-label="Your email address"
        value={email}
        onChange={handleEmail}
      />
      <span className="error">{validationErrors.email}</span>
      <input
        data-members-email=""
        type="password"
        placeholder="Your password"
        aria-label="Your password"
        value={password}
        onChange={handlePassword}
      />
      <button
        className="global-button button-clone"
        type="submit"
        disabled={errors ? true : false}
      >
        Submit
      </button>
      {errors?.map((item) => (
        <p>{item.toString()}</p>
      ))}
      <div>
        <small className="alert-loading global-alert">
          Processing your application
        </small>
        <small className="alert-error global-alert">
          There was an error sending the email
        </small>
      </div>
      <small className="global-question">
        Don’t have an account yet? <a href="/signup/">Sign up</a>
      </small>
      </form> */}
    </>
  );
};

export default SignInForm;
