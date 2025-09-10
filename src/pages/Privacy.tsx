import Topic from "@/components/Topic";

const Privacy = () => {
  const websiteName = "Nysdev";

  return (
    <div>
      <header className="mb-6">
        <Topic
          topic="Privacy Policy"
          desc="We keep it simple 🌼 please read through so you feel comfortable and informed"
        />
      </header>

      <div className="max-w-5xl border-2 border-sky-200 w-full mx-auto rounded-[100px] bg-sky-50 py-18 px-18">
        <section className="space-y-6 text-gray-800">
          <article>
            <p className="text-sm mb-8 text-gray-600 mt-2">
              This Privacy Policy explains how {websiteName} (hereinafter
              referred to as "the Website," "we," "us," or "our") collects,
              uses, and discloses your personal data in accordance with
              Thailand's Personal Data Protection Act B.E. 2562.
            </p>

            <h2 className="text-lg font-medium">
              1. What Personal Data We Collect
            </h2>
            <p className="mt-2 text-sm">
              When you register as a member and use our services, we may collect
              the following personal data:
              <ul className="list-disc list-inside mt-2 text-sm space-y-2">
                <li>Contact Information: Your email address.</li>
                <li>
                  User-Generated Content: Any personal data you choose to
                  include in your blog posts, stories, or images that you
                  upload.
                </li>
              </ul>
            </p>
          </article>

          <article className="text-sm">
            <h2 className="text-lg font-medium">
              2. How We Use Your Personal Data
            </h2>
            <p className="mt-2 text-sm">
              We use the personal data we collect for the following purposes:
            </p>
            <ol className="list-disc list-inside mt-2 text-sm space-y-2">
              <li>To create and manage your member account.</li>
              <li>
                To enable you to access and use our services, including
                publishing blogs and uploading images.
              </li>
              <li>
                To send you service-related announcements, updates, and
                communications.
              </li>
              <li>
                To monitor and analyze user activity to improve the
                functionality and user experience of our services.
              </li>
              <li>
                To comply with legal obligations and to protect our rights and
                interests, as required by law.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              3. The Legal Basis for Processing Your Personal Data
            </h2>
            <p className="mt-2 text-sm">
              We process your personal data based on your explicit consent,
              which you provide when you agree to our Terms & Conditions and
              this Privacy Policy upon registration. You have the right to
              withdraw your consent at any time, but this will not affect the
              lawfulness of processing that occurred before your withdrawal.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              4. Disclosure of Your Personal Data
            </h2>
            <p className="mt-2 text-sm">
              We will not disclose your personal data to third parties, except
              in the following limited circumstances:
            </p>
            <ol className="list-disc list-inside mt-2 text-sm space-y-2">
              <li>With your consent.</li>
              <li>
                To our service providers who perform functions on our behalf
                (e.g., website hosting, data storage) and are bound by
                confidentiality agreements.
              </li>
              <li>
                To comply with legal obligations, such as a court order or other
                legal process.
              </li>
              <li>
                To protect the rights, property, or safety of the Website, our
                members, or the public.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              5. Your Rights as a Data Subject
            </h2>
            <p className="mt-2 text-sm">
              Under the PDPA, you have the following rights regarding your
              personal data:
            </p>

            <ol className="list-disc list-inside mt-2 text-sm space-y-2">
              <li>
                Right to access: You have the right to request access to and
                obtain a copy of your personal data.
              </li>
              <li>
                Right to rectification: You have the right to request that we
                correct any inaccurate personal data.
              </li>
              <li>
                Right to erasure (right to be forgotten): You have the right to
                request the deletion of your personal data under certain
                conditions.
              </li>
              <li>
                Right to restrict processing: You have the right to request that
                we limit the processing of your personal data.
              </li>
              <li>
                Right to data portability: You have the right to receive your
                personal data in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                Right to object: You have the right to object to the processing
                of your personal data under certain conditions.
              </li>
              <li>
                Right to withdraw consent: You have the right to withdraw your
                consent at any time.
              </li>
            </ol>

            <p className="mt-2 text-sm">
              To exercise any of these rights, please contact us via email below
              this page.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">6. Data Retention</h2>
            <p className="mt-2 text-sm">
              We will retain your personal data for as long as your account is
              active or as necessary to fulfill the purposes for which it was
              collected, including for legal, accounting, or reporting
              requirements.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              7. Changes to This Privacy Policy
            </h2>
            <p className="mt-2 text-sm">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any material changes by posting the new Privacy Policy on this
              page and updating the "Last Updated" date at the top.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">8. Contact Us</h2>
            <p className="mt-2 text-sm">
              <span>
                If you have any questions about this Privacy Policy or our data
                practices, please contact: {"  "}
              </span>
              <span className="text-sky-500 underline">support@nysdev.com</span>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};
export default Privacy;
