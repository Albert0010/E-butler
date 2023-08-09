import { Dialog, DialogContent } from "@mui/material";
import { FC } from "react";
import { handleDialogClick } from "../utils/constants";
import { TPopup2 } from "../types/types";

const Popup2: FC<TPopup2> = ({ setIsOpenDialog2, isOpenDialog2 }) => {
  const handleOutsideClick = () => {
    setIsOpenDialog2(false);
  };

  return (
    <>
      <Dialog
        className="popup2"
        open={isOpenDialog2}
        onClose={handleOutsideClick}
      >
        <DialogContent>
          <div className="dialog-content" onClick={handleDialogClick}>
            <h2 className="section-title">PRIVACY POLICY</h2>
            <div className="pop-line pop-line2"></div>
            <p>Effective date: 2021-09-01</p>
            <h3>1. Introduction</h3>
            <p>
              Welcome to EButler. <br />
              <br />
              EButler (“us”, “we”, or “our”) operates https://home.e-butler.com/
              (hereinafter referred to as “Service”).
              <br />
              Our Privacy Policy governs your visit to
              https://home.e-butler.com/, and explains how we collect, safeguard
              and disclose information that results from your use of our
              Service.
              <br />
              We use your data to provide and improve Service. By using Service,
              you agree to the collection and use of information in accordance
              with this policy. Unless otherwise defined in this Privacy Policy,
              the terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions. <br />
              Our Terms and Conditions (“Terms”) govern all use of our Service
              and together with the Privacy Policy constitutes your agreement
              with us (“agreement”). <br />
              <br />
            </p>
            <h3>2. Definitions</h3>
            <p>
              SERVICE means the https://home.e-butler.com/ website operated by
              EButler.
              <br />
              PERSONAL DATA means data about a living individual who can be
              identified from those data (or from those and other information
              either in our possession or likely to come into our possession).
              <br />
              USAGE DATA is data collected automatically either generated by the
              use of Service or from Service infrastructure itself (for example,
              the duration of a page visit).
              <br />
              COOKIES are small files stored on your device (computer or mobile
              device).
              <br />
              DATA CONTROLLER means a natural or legal person who (either alone
              or jointly or in common with other persons) determines the
              purposes for which and the manner in which any personal data are,
              or are to be, processed. For the purpose of this Privacy Policy,
              we are a Data Controller of your data.
              <br />
              DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal
              person who processes the data on behalf of the Data Controller. We
              may use the services of various
              <br />
              Service Providers in order to process your data more effectively.
              <br />
              DATA SUBJECT is any living individual who is the subject of
              Personal Data.
              <br />
              THE USER is the individual using our Service. The User corresponds
              to the Data Subject, who is the subject of Personal Data.
              <br />
            </p>
            <h3>3. Information Collection and Use</h3>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
              <br />
              <br />
            </p>
            <h3>4. Types of Data Collected</h3>
            <p>
              Personal Data
              <br />
              <br />
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you (“Personal Data”). Personally identifiable
              information may include, but is not limited to:
              <br />
              0.1. Email address
              <br />
              0.2. First name and last name
              <br />
              0.3. Phone number
              <br />
              0.4. Address, Country, State, Province, ZIP/Postal code, City
              <br />
              0.5. Cookies and Usage Data
              <br />
              We may use your Personal Data to contact you with newsletters,
              marketing or promotional materials and other information that may
              be of interest to you. You may opt out of receiving any, or all,
              of these communications from us by following the unsubscribe link.
              <br />
              <br />
              Usage Data
              <br />
              <br />
              We may also collect information that your browser sends whenever
              you visit our Service or when you access Service by or through any
              device (“Usage Data”).
              <br />
              This Usage Data may include information such as your computer’s
              Internet Protocol address (e.g. IP address), browser type, browser
              version, the pages of our Service that you visit, the time and
              date of your visit, the time spent on those pages, unique device
              identifiers and other diagnostic data.
              <br />
              When you access Service with a device, this Usage Data may include
              information such as the type of device you use, your device unique
              ID, the IP address of your device, your device operating system,
              the type of Internet browser you use, unique device identifiers
              and other diagnostic data.
              <br />
              <br />
              Location Data
              <br />
              <br />
              We may use and store information about your location if you give
              us permission to do so (“Location Data”). We use this data to
              provide features of our Service, to improve and customize our
              Service.
              <br />
              You can enable or disable location services when you use our
              Service at any time by way of your device settings.
              <br />
              <br />
              Tracking Cookies Data
              <br />
              <br />
              We use cookies and similar tracking technologies to track the
              activity on our Service and we hold certain information.
              <br />
              Cookies are files with a small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Other tracking technologies
              are also used such as beacons, tags and scripts to collect and
              track information and to improve and analyze our Service.
              <br />
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
              <br />
              <br />
              Examples of Cookies we use:
              <br />
              <br />
              0.1. Session Cookies: We use Session Cookies to operate our
              Service.
              <br />
              0.2. Preference Cookies: We use Preference Cookies to remember
              your preferences and various settings.
              <br />
              0.3. Security Cookies: We use Security Cookies for security
              purposes.
              <br />
              0.4. Advertising Cookies: Advertising Cookies are used to serve
              you with advertisements that may be relevant to you and your
              interests.
              <br />
              <br />
              Other Data
              <br />
              <br />
              While using our Service, we may also collect the following
              information: sex, age, date of birth, place of birth, passport
              details, citizenship, registration at place of residence and
              actual address, telephone number (work, mobile), details of
              documents on education, qualification, professional training,
              employment agreements, information on bonuses and compensation,
              information on marital status, family members, social security (or
              other taxpayer identification) number, office location and other
              data.
              <br />
              <br />
            </p>
            <h3>5. Use of Data</h3>
            <p>
              EButler uses the collected data for various purposes:
              <br />
              <br />
              0.1. to provide and maintain our Service;
              <br />
              0.2. to notify you about changes to our Service;
              <br />
              0.3. to allow you to participate in interactive features of our
              Service when you choose to do so;
              <br />
              0.4. to provide customer support;
              <br />
              0.5. to gather analysis or valuable information so that we can
              improve our Service;
              <br />
              0.6. to monitor the usage of our Service;
              <br />
              0.7. to detect, prevent and address technical issues;
              <br />
              0.8. to fulfil any other purpose for which you provide it;
              <br />
              0.9. to carry out our obligations and enforce our rights arising
              from any contracts entered into between you and us, including for
              billing and collection;
              <br />
              0.10. to provide you with notices about your account and/or
              subscription, including expiration and renewal notices,
              email-instructions, etc.;
              <br />
              0.11. to provide you with news, special offers and general
              information about other goods, services and events which we offer
              that are similar to those that you have already purchased or
              enquired about unless you have opted not to receive such
              information;
              <br />
              0.12. in any other way we may describe when you provide the
              information;
              <br />
              0.13. for any other purpose with your consent.
              <br />
              <br />
            </p>
            <h3>6. Retention of Data</h3>
            <p>
              We will retain your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your Personal Data to the extent necessary to comply with
              our legal obligations (for example, if we are required to retain
              your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
              <br />
              We will also retain Usage Data for internal analysis purposes.
              Usage Data is generally retained for a shorter period, except when
              this data is used to strengthen the security or to improve the
              functionality of our Service, or we are legally obligated to
              retain this data for longer time periods.
              <br />
              <br />
              However, you are in total control of your data. Should you wish to
              have your data deleted / removed from EButler, please send us an
              email to alfred@e-butler.com with your request and we will respond
              within 2 businesses days with a confirmation of deletion.
            </p>
            <h3>7. Transfer of Data</h3>
            <p>
              Your information, including Personal Data, may be transferred to –
              and maintained on – computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
              <br />
              If you are located outside Netherlands and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to Netherlands and process it there.
              <br />
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
              <br />
              EButler will take all the steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal
              <br />
              Data will take place to an organisation or a country unless there
              are adequate controls in place including the security of your data
              and other personal information.
              <br />
              <br />
            </p>
            <h3>8. Disclosure of Data</h3>
            <p>
              We may disclose personal information that we collect, or you
              provide:
              <br />
              <br />
              0.1. Disclosure for Law Enforcement.
              <br />
              Under certain circumstances, we may be required to disclose your
              Personal Data if required to do so by law or in response to valid
              requests by public authorities.
              <br />
              0.2. Business Transaction.
              <br />
              If we or our subsidiaries are involved in a merger, acquisition or
              asset sale, your Personal Data may be transferred.
              <br />
              0.3. Other cases. We may disclose your information also:
              <br />
              0.3.1. to our subsidiaries and affiliates;
              <br />
              0.3.2. to contractors, service providers, and other third parties
              we use to support our business;
              <br />
              0.3.3. to fulfill the purpose for which you provide it;
              <br />
              0.3.4. for the purpose of including your company’s logo on our
              website;
              <br />
              0.3.5. for any other purpose disclosed by us when you provide the
              information;
              <br />
              0.3.6. with your consent in any other cases;
              <br />
              0.3.7. if we believe disclosure is necessary or appropriate to
              protect the rights, property, or safety of the Company, our
              customers, or others.
              <br />
              <br />
            </p>
            <h3>9. Security of Data</h3>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
              <br />
              <br />
            </p>
            <h3>10. Service Providers</h3>
            <p>
              We may employ third party companies and individuals to facilitate
              our Service (“Service Providers”), provide Service on our behalf,
              perform Service-related services or assist us in analysing how our
              Service is used.
              <br />
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
              <br />
              <br />
            </p>
            <h3>11. Analytics</h3>
            <p>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
              <br />
              <br />
            </p>
            <h3>12. CI/CD tools</h3>
            <p>
              We may use third-party Service Providers to automate the
              development process of our Service.
              <br />
              <br />
            </p>
            <h3>13. Behavioral Remarketing</h3>
            <p>
              We may use remarketing services to advertise on third party
              websites to you after you visited our Service. We and our
              third-party vendors use cookies to inform, optimise and serve ads
              based on your past visits to our Service.
              <br />
              <br />
            </p>
            <h3>14. Payments</h3>
            <p>
              We may provide paid products and/or services within Service. In
              that case, we use third-party services for payment processing
              (e.g. payment processors).
              <br />
              We will not store or collect your payment card details. That
              information is provided directly to our third-party payment
              processors whose use of your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, Mastercard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information.
              <br />
              <br />
            </p>
            <h3>15. Links to Other Sites</h3>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click a third party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit.
              <br />
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
              <br />
              <br />
            </p>
            <h3>16. Changes to This Privacy Policy </h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              <br />
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update
              “effective date” at the top of this Privacy Policy.
              <br />
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
              <br />
              <br />
            </p>
            <h3>17. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email: contact@e-butler.com.
              <br />
              <br />
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popup2;
