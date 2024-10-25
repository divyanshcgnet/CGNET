const CookiePolicy = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center gap-12 px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold md:text-5xl">
          Cookie Policy
        </h1>
        <div className="text-center text-xs text-themeLightGrey">
          Last Update: 26th December, 2023
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Introduction</h2>
        <p>
          At CryptoGrad, safeguarding your privacy is our priority. We believe
          in transparency, and this Cookie Policy is designed to clarify the use
          of cookies and similar technologies on our platform. It outlines how
          we employ cookies, the types we utilize, and the options available to
          you in managing them.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your computer or
          mobile device when you visit a website. They play a pivotal role in
          enhancing website functionality, performance, and user experience.
          Cookies can be either temporary (session cookies) or permanent
          (persistent cookies), aiding in recognizing your preferences and
          activities on our platform.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-3xl font-medium md:text-4xl">
            How Do We Use Cookies?
          </h2>
          <p>We utilize cookies for the following purposes:</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Essential Cookies</h3>
          <p>
            These cookies are integral to the proper functioning of our website,
            facilitating navigation and providing access to secure areas.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. Performance Cookies</h3>
          <p>
            Collecting data on visitor interactions helps us enhance the
            performance and functionality of our website. This includes
            information on frequently visited pages and potential error
            messages.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. Functionality Cookies</h3>
          <p>
            Remembering your choices, such as language preferences, these
            cookies offer personalized features and an improved user experience.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">4. Advertising Cookies</h3>
          <p>
            To deliver pertinent ads based on your interests, limit ad
            frequency, and measure advertising campaign effectiveness.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">5. Social Media Cookies</h3>
          <p>
            Enabling content sharing on social media platforms like Facebook,
            Twitter, and LinkedIn, these cookies enhance your engagement with
            our website.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-3xl font-medium md:text-4xl">
            Third-party Cookies
          </h2>
          <p>We employ third-party cookies for the following purposes:</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Analytics</h3>
          <p>
            Utilizing analytics services to collect data on website usage,
            aiding our understanding of user behavior and service improvement.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. Advertising</h3>
          <p>
            Collaborating with advertising networks, we may use cookies to track
            your activity across websites, ensuring relevant advertisements.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. Social Media</h3>
          <p>
            While promoting our services on social media platforms, cookies may
            be used to collect data on your website activity.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Your Options</h2>
        <p>
          Most web browsers enable you to control cookie settings; however,
          disabling cookies may impact certain website features. Opt-out of
          specific cookies through the provided links:
        </p>
        <p>
          Google Analytics:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>
        <p>
          Facebook:{' '}
          <a
            href="https://www.facebook.com/help/568137493302217"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://www.facebook.com/help/568137493302217
          </a>
        </p>
        <p>
          Twitter:{' '}
          <a
            href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads
          </a>
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">
          Changes to this Policy
        </h2>
        <p>
          This Cookie Policy may be updated periodically, and significant
          changes will be communicated through email or notices on our website.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Contact Us</h2>
        <p>
          For any queries about our cookie usage or this policy, contact us
          using the details provided on our website.
        </p>
        <p>
          By continuing to use CryptoGrad, you agree to adhere to the practices
          outlined in this Cookie Policy.
        </p>
      </div>
    </div>
  )
}

export default CookiePolicy
