const FooterAddress = () => {
  return (
    <div className="footer__container__contact-us__contact">
      <span className="footer__container__contact-us__contact__info">
        Contact Info
      </span>

      <span className="footer__container__contact-us__contact__number">
        <span>
          <a className="tel" href="/">
            +91 12345 67890
          </a>
        </span>
        <span>|</span>
        <span>
          <a className="tel" href="/">
            +91 12345 67890
          </a>
        </span>
      </span>

      <p className="footer__container__contact-us__contact__address">
        17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
    </div>
  );
};

export default FooterAddress;
