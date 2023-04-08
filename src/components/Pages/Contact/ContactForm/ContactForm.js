import React from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) {
      errors.preventDefault();
    }
  };

  return (
    <div>
      <section className="contact-form" data-form>
        <h3 className="h3 form-title">Contact Form</h3>
        <form
          onSubmit={onSubmit}
          action="https://formsubmit.co/e85839bd316d4c0793cb2633a22a7bba"
          method="POST"
          className="form">
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="Full name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              type="email"
              className="form-input"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button className="form-btn" type="submit">
            <div className="ion-icon">
              <FaPaperPlane />
            </div>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
