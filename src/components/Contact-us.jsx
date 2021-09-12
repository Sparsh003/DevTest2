import React from "react";

const Contact = () => {
  return (
    <>
      <form class="row g-3 text-light">
        <h2 class="text-center">Contact Us</h2>
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control  contactus-text "
            id="validationDefault01"
            placeholder="First Name"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control bg-transparent input-text"
            id="validationDefault02"
            placeholder="Last name"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">
            Business Email
          </label>
          <input
            type="text"
            class="form-control bg-transparent"
            id="validationDefault02"
            placeholder="Business Email"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">
            Company
          </label>
          <input
            type="text"
            class="form-control bg-transparent"
            id="validationDefault02"
            placeholder="company"
            required
          />
        </div>
        <div class="col-md-12">
          <label for="validationDefault02" class="form-label text-light">
            Country
          </label>
          <select
            class="form-select bg-transparent"
            aria-label="Default select example"
          >
            <option selected class="text-light select-text">
              Country
            </option>
            <option value="1">India</option>
            <option value="2">Germany</option>
            <option value="3">America</option>
          </select>
        </div>
        <div class="w-100">
          <button className="btn text-light submit-button">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Contact;
