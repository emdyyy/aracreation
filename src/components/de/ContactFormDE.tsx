const ContactForm = () => {
  return (
    <>
      <form
        action="#"
        className="flex w-full max-w-[530px] flex-col gap-5 bg-[#F1F1F1] px-5 py-8 sm:px-8 sm:py-12 md:p-12"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email Addresse*</label>
          <input
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            required={true}
            placeholder="Ihre Email Adresse"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
            value=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="phoneNumber">Rufnummer*</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            autoComplete="tel-national"
            required={true}
            minLength={12}
            maxLength={12}
            placeholder="Ihre Rufnummer"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
            value=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="topic">Thema*</label>
          <select
            name="topic"
            id="topic"
            className="bg-lighter rounded-none border border-solid p-4 outline-none disabled:bg-slate-300 disabled:text-slate-500
		  border-[#747474]"
          >
            <option value="QUOTE" selected={true}>
              Offerte bestellen
            </option>
            <option value="PARTNER">Partner werden</option>
            <option value="SUPPORT">Support</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message">Nachricht*</label>
          <textarea
            name="message"
            id="message"
            required={true}
            autoComplete="off"
            placeholder="Was möchten Sie besprechen?"
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
          Senden
        </button>
      </form>
    </>
  );
};

export default ContactForm;
