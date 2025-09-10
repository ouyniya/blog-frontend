import Topic from "@/components/Topic";

const Cookie = () => {

  return (
    <div>
      <header className="mb-6">
        <Topic
          topic="Cookie Policy"
          desc="We keep it simple 🌼 please read through so you feel comfortable and informed"
        />
      </header>

      <div className="max-w-5xl border-2 border-sky-200 w-full mx-auto rounded-[100px] bg-sky-50 py-18 px-18">
        <section className="space-y-6 text-gray-800">
          <article>
            <p className="text-sm mb-8 text-gray-600 mt-2">
              This Cookie Policy explains what cookies are, how we use them, and
              what your choices are regarding their use. By using our website,
              you consent to our use of cookies in accordance with this policy.
            </p>

            <h2 className="text-lg font-medium">1. What are Cookies?</h2>
            <p className="mt-2 text-sm">
              Cookies are small text files that are placed on your device
              (computer, smartphone, or other device) when you visit a website.
              They are widely used to make websites work more efficiently and to
              provide a better user experience by remembering your preferences
              and helping to improve website functionality.
            </p>
          </article>

          <article className="text-sm">
            <h2 className="text-lg font-medium">2. How We Use Cookies</h2>
            <p className="mt-2 text-sm">
              We use cookies for the following purposes:
            </p>
            <ol className="list-disc list-inside mt-2 text-sm space-y-2">
              <li>
                Strictly Necessary Cookies: These cookies are essential for the
                operation of our website. They enable you to log in, navigate
                the site, and use its basic features. Without these cookies, the
                website would not function properly.
              </li>
              <li>
                Functionality Cookies: These cookies allow the website to
                remember choices you have made (such as your login details) to
                provide a more personalized experience.
              </li>
              <li>
                Performance Cookies: These cookies help us understand how
                visitors interact with our website. They collect information
                about the number of visitors, which pages are most popular, and
                how users navigate the site. This data helps us improve the
                performance and design of our website.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-medium">3. Types of Cookies We Use</h2>
            <ol className="list-disc list-inside mt-2 text-sm space-y-2">
              <li>
                Session Cookies: These are temporary cookies that remain in your
                browser's cookie file until you leave the website.
              </li>
              <li>
                Persistent Cookies: These cookies remain in your browser's
                cookie file for a longer period and are used to remember you on
                subsequent visits.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-medium">4. Third-Party Cookies</h2>
            <p className="mt-2 text-sm">
              In some cases, we may use third-party services that may also place
              cookies on your device. These may include services for website
              analytics. We have no control over the cookies used by these third
              parties. You should refer to the respective third party’s privacy
              or cookie policy for more information.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">5. Your Choices</h2>
            <p className="mt-2 text-sm">
              Most web browsers automatically accept cookies, but you can
              usually modify your browser settings to decline cookies if you
              prefer. However, please note that disabling cookies may affect the
              functionality of our website and may prevent you from using
              certain features. You can manage your cookie preferences directly
              in your browser settings.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">6. Contact Us</h2>
            <p className="mt-2 text-sm">
              <span>
                If you have any questions about our use of cookies, please
                contact us at {"  "}
              </span>
              <span className="text-sky-500 underline">support@nysdev.com</span>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};
export default Cookie;
