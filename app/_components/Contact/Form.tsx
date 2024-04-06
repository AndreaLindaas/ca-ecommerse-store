import styles from "./form.module.css";
import React, { useState } from 'react';
import Link from "next/link";

const FormComponent: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameIsValid, setNameIsValid] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [subjectIsValid, setSubjectIsValid] = useState<boolean>(false);
  const [addressIsValid, setAddressIsValid] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const regexName = /^[a-zA-Z\s]{2,}$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexSubject = /^[a-zA-Z0-9\s]{10,}$/;
  const regexAddress = /^[a-zA-Z0-9\s]{10,}$/;

  const validateField = (
    value: string,
    regex: RegExp,
    setValidity: (valid: boolean) => void
  ) => {
    const isValid = regex.test(value);
    setValidity(isValid);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      setNameIsValid(validateField(value, regexName, setNameIsValid));
    } else if (name === 'email') {
      setEmail(value);
      setEmailIsValid(validateField(value, regexEmail, setEmailIsValid));
    } else if (name === 'subject') {
      setSubject(value);
      setSubjectIsValid(validateField(value, regexSubject, setSubjectIsValid));
    } else if (name === 'address') {
      setAddress(value);
      setAddressIsValid(validateField(value, regexAddress, setAddressIsValid));
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameIsValid &&
      emailIsValid &&
      subjectIsValid &&
      addressIsValid &&
      message.trim().length >= 2
    ) {
      setFormSubmitted(true);
    } else {
      alert('Please fill out the form correctly');
    }
  };

  return (
    <div className="w-4/5 max-w-600 mx-auto p-20 bg-gray-900 border-2 border-gray-300 rounded-md relative">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-10 py-3 border-b-2 border-gray-300 rounded-md bg-gray-900 text-white"
            />
            {!nameIsValid && (
              <p className="text-red-400">
                Your name must be more than 10 characters and only characters
                A-Z.
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="text-white">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-10 py-3 border-b-2 border-gray-300 rounded-md bg-gray-900 text-white"
            />
            {!emailIsValid && (
              <p className="text-red-400">Your email must be a real email.</p>
            )}
          </div>
          <div className="mb-5">
            <label className="text-white">Subject:</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
              className="w-full px-10 py-3 border-b-2 border-gray-300 rounded-md bg-gray-900 text-white"
            />
            {!subjectIsValid && (
              <p className="text-red-400">
                Your subject must be more than 10 letters and only characters A-Z.
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="text-white">Address:</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              className="w-full px-10 py-3 border-b-2 border-gray-300 rounded-md bg-gray-900 text-white"
            />
             {!addressIsValid && (
              <p className="text-red-400">
                Your address must be more than 10 letters
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="text-white">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className="w-full px-10 py-3 border-b-1 border-gray-300 border-none bg-gray-900 text-white"
            />
          </div>
          <button
            type="submit"
            disabled={
              !nameIsValid ||
              !emailIsValid ||
              !subjectIsValid ||
              !addressIsValid ||
              message.trim().length < 2
            }
            className="w-full px-10 py-3 bg-blue-700 text-white border-none rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      ) : (
<div className="text-white text-center mt-5">
          <p className="mb-3 text-2xl font-semibold">Form submitted successfully!</p>
          <p className="text-lg">Thank you for your submission.</p>
          <Link href="/">
          <p>Return to homepage</p>
        </Link>
        </div>      )}

    </div>
  );
};

export default FormComponent;
