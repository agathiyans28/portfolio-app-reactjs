import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="form px-2 px-sm-4 px-md-3 px-lg-4 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="d-sm-flex d-md-block d-lg-flex">
        <input
          type="text"
          id="name"
          className="form-control-input me-sm-3"
          placeholder="Full name"
          {...register("Full name", { required: true, maxLength: 30 })}
        />
        <input
          type="email"
          id="email"
          className="form-control-input"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>

      <div className="">
        <input
          type="text"
          id="subject"
          className="form-control-input"
          placeholder="Subject"
          {...register("Full name", { required: true, maxLength: 100 })}
        />
      </div>

      <div className="">
        <textarea
          placeholder="Message"
          className="form-control-input"
          {...register("Message", { required: true })}
        />
      </div>

      <input type="submit" className="mt-3 submit-btn mx-auto p-2 d-block btn btn-primary" value="Send" />
    </form>
  );
}
