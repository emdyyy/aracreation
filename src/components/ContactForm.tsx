const ContactForm = () => {
  return (
    <>
      <form
        action="#"
        className="flex w-full max-w-[530px] flex-col gap-5 bg-[#F1F1F1] px-5 py-8 sm:px-8 sm:py-12 md:p-12"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email address*</label>
          <input
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            required={true}
            placeholder="Your email address"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
            value=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="phoneNumber">Phone number*</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            autoComplete="tel-national"
            required={true}
            minLength={12}
            maxLength={12}
            placeholder="Your phone number"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
            value=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="topic">Topic*</label>
          <select
            name="topic"
            id="topic"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
          >
            <option value="QUOTE" selected={true}>
              Request a quote
            </option>
            <option value="PARTNER">Become a partner</option>
            <option value="SUPPORT">Support</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message">Message*</label>
          <textarea
            name="message"
            id="message"
            required={true}
            autoComplete="off"
            placeholder="What do you want to discuss?"
            rows={3}
            maxLength={150}
            className="bg-lighter resize-y rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary-yellow my-4 block px-6 py-4 text-center text-black disabled:bg-slate-300 disabled:text-slate-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
