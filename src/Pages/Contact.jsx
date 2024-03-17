import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState } from "react";
import Button from "../components/Button";

const x =
  "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png";

const intialFormState = {
  name: "",
  email: "",
  age: "",
  gender: "",
  phoneNumber: "",
  interest: "",
  level: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(intialFormState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key].trim() === "") {
        alert("Please fill in all the form fields.");
        return;
      }
    }

    // Check if contact number is valid
    if (
      isNaN(formData.phoneNumber.trim()) ||
      formData.phoneNumber.trim().length !== 10
    ) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    // Check if age is valid
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 0 || age > 100) {
      alert("Please enter a valid age.");
      return;
    }

    // If all checks pass, you can proceed
    setFormData(intialFormState);
    alert(formData);
  }

  const arr = [1, 2];

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
          <div className=" self-center">
            <h1 className=" text-4xl md:text-6xl text-center lg:text-left font-bold">
              Talk With Our Representatives
            </h1>
          </div>

          <section className="self-center justify-self-center flex flex-col md:flex-row gap-4">
            {arr.map((ar) => (
              <div className="flex gap-2 md:flex-col md:items-center md:text-center">
                <div className="flex-1 md:flex-auto rounded-md md:rounded-full md:aspect-square overflow-hidden md:w-64 group">
                  <img
                    src={x}
                    className="bg-gray-800 group-hover:scale-[1.05] transition-all"
                  />
                </div>
                <div className="flex-1 ">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                    Anup Poudel
                  </h4>
                  <p className="">+977-9856895868</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-self-center my-64">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-5xl md:text-6xl text-left font-bold">
              Let's Talk
            </h1>
            <p className="text-xl opacity-90">
              Please fill the form and we will get in touch with you very
              shortly.
            </p>
          </div>
          <div className="col-span-2">
            <form className="flex flex-col gap-2 w-full contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="flex gap-2">
                <input
                  className="w-full"
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
                <select
                  name="gender"
                  className="w-full"
                  value={formData.gender}
                  onChange={handleChange}
                  placeholder="Gender"
                >
                  <option value="" selected>
                    Select your Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                pattern="[0-9]{10}"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="Interest"
              >
                <option value="">Select an interest</option>
                <option value="Interest1"> Interest 1</option>
                <option value="Interest2"> Interest 2</option>
                <option value="Interest3"> Interest 3</option>
              </select>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder="Level"
              >
                <option value="">Select a level</option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              <Button onClick={handleSubmit} classes="my-2">
                Submit
              </Button>
            </form>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-1 | flex flex-col md:flex-row lg:flex-col gap-4 ">
            <h2 className="text-2xl font-bold md:mt-0 md:flex-1 lg:flex-auto text-white">
              Or, Visit us
            </h2>

            <ul className="md:flex-1 lg:flex-auto">
              <li>078-954-6181</li>
              <li>
                〒650-0022 Hyogo, Kobe-shi, Chuo-ku, Motomachi - dori, 2-9-1,
                Motomachi Plaza Bldg. 7th floor
              </li>
            </ul>

            <div className="w-full md:flex-1 lg:flex-auto h-[20rem] aspect-square ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25177.743893227915!2d85.36899854461365!3d27.69773974217551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport!5e0!3m2!1sen!2snp!4v1709562595204!5m2!1sen!2snp"
                allowfullscreen=""
                className="w-full h-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
