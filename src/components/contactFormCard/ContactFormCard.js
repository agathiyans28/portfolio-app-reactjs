import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data) {
      emailjs
        .send("service_vtaict5", "template_4xf6248", data, "fCVrMr_2RqC5gav2r")
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            });
            reset({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Oops, Something went wrong",
              text: error.text,
            });
          }
        );
      
    }
  };

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
          {...register("name", { required: true, maxLength: 30 })}
        />
        <input
          type="email"
          id="email"
          className="form-control-input"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>

      <div className="">
        <input
          type="text"
          id="subject"
          className="form-control-input"
          placeholder="Subject"
          {...register("subject", { required: true, maxLength: 100 })}
        />
      </div>

      <div className="">
        <textarea
          placeholder="Message"
          className="form-control-input"
          {...register("message", { required: true })}
        />
      </div>

      <input
        type="submit"
        className="mt-3 submit-btn mx-auto p-2 d-block btn btn-primary"
        value="Send"
      />
    </form>
  );
}
