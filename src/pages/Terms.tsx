import Topic from "@/components/Topic";

const Terms = () => {
  const websiteName = "Nysdev";
  const privacyPolicyHref = "/privacy";

  return (
    <div>
      <header className="mb-6">
        <Topic
          topic="Terms &amp; Conditions"
          desc="We keep it simple 🌼 please read through so you feel comfortable and informed"
        />

        <p className="text-sm text-gray-600 mt-2">
          Please read these Terms &amp; Conditions carefully before using our
          website and services. By accessing or using this website, you agree to
          be bound by all of the terms and conditions outlined herein.
        </p>
      </header>

      <div className="max-w-5xl border-2 border-sky-200 w-full mx-auto rounded-[100px] bg-sky-50 py-18 px-18">
        <section className="space-y-6 text-gray-800">
          <article>
            <h2 className="text-lg font-medium">1. Introduction</h2>
            <p className="mt-2 text-sm">
              The website{" "}
              <strong className="text-sky-500">{websiteName}</strong>{" "}
              (hereinafter referred to as the "Website") provides a platform for
              users (hereinafter referred to as "Members") to write blogs,
              publish stories, upload images, and read content created by other
              members. This Website operates in accordance with the laws and
              regulations of Thailand.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">2. Membership and Use</h2>
            <ol className="list-decimal list-inside mt-2 text-sm space-y-2">
              <li>
                <strong>Eligibility:</strong> Users must be at least 18 years of
                age. If a user is under 18, they must have the consent of a
                parent or legal guardian.
              </li>
              <li>
                <strong>Account Information:</strong> You agree to provide
                accurate, complete, and current information during the
                registration process, including your email address, and are
                responsible for maintaining the confidentiality of your
                password.
              </li>
              <li>
                <strong>Acceptable Use:</strong> You agree to use the services
                in a lawful and appropriate manner, refraining from any actions
                that may disrupt, damage, or interfere with the operation of the
                Website or other users.
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              3. Collection and Use of Personal Information
            </h2>
            <p className="mt-2 text-sm">
              <strong>Information Collected:</strong> The Website will collect
              your personal information, including but not limited to the email
              address you provide during registration.
            </p>

            <p className="mt-2 text-sm">
              <strong>Purpose of Use:</strong> The information collected will be
              used for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>To verify identity and manage member accounts.</li>
              <li>
                For communication and notifications regarding our services.
              </li>
              <li>To analyze and improve the quality of our services.</li>
            </ul>

            <p className="mt-2 text-sm">
              <strong>Compliance with Thai Law:</strong> The collection, use,
              and disclosure of personal information will be conducted in
              accordance with Thailand's Personal Data Protection Act B.E. 2562
              (PDPA). You can read our Privacy Policy for more details at{" "}
              <a href={privacyPolicyHref} className="text-sky-600 underline">
                our Privacy Policy
              </a>
              .
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              4. Content and Intellectual Property Rights
            </h2>
            <p className="mt-2 text-sm">
              <strong>Ownership of Content:</strong> Content created and
              published by members on the Website, such as blogs, text, images,
              and videos (hereinafter referred to as "Content"), remains the
              property of the creating member.
            </p>

            <p className="mt-2 text-sm">
              <strong>Right to Use Content:</strong> By uploading Content to the
              Website, you grant us a non-exclusive, sublicensable, and
              royalty-free license to use, reproduce, distribute, modify, and
              display such Content for the purpose of providing the Website's
              services.
            </p>

            <p className="mt-2 text-sm">
              <strong>Intellectual Property Infringement:</strong> You must not
              publish any Content that infringes on the copyrights, trademarks,
              or intellectual property of others.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">5. Limitation of Liability</h2>
            <p className="mt-2 text-sm">
              <strong>User-Generated Content:</strong> The Website is not
              responsible for any Content published by its members. The views
              and opinions expressed in the Content belong solely to the authors
              and do not necessarily reflect the views of the Website.
            </p>

            <p className="mt-2 text-sm">
              <strong>Disclaimer of Warranties:</strong> The Website and its
              services are provided on an "as-is" and "as-available" basis
              without any warranties, express or implied, including but not
              limited to warranties of merchantability, fitness for a particular
              purpose, or non-infringement.
            </p>

            <p className="mt-2 text-sm">
              <strong>Limitation of Damages:</strong> In no event shall the
              Website or its operators be liable for any indirect, incidental,
              special, or consequential damages arising out of or in connection
              with your use of the Website.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">6. Termination of Service</h2>
            <p className="mt-2 text-sm">
              The Website reserves the right to suspend or terminate your
              account and access to the services at its sole discretion, without
              prior notice, if you breach any of these Terms &amp; Conditions.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">
              7. Governing Law and Jurisdiction
            </h2>
            <p className="mt-2 text-sm">
              These Terms &amp; Conditions shall be governed by and construed in
              accordance with the laws of Thailand. Any disputes arising from
              these terms will be subject to the exclusive jurisdiction of the
              courts of Thailand.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-medium">8. Changes to the Terms</h2>
            <p className="mt-2 text-sm">
              The Website reserves the right to amend or update these Terms
              &amp; Conditions at any time. Changes will be effective
              immediately upon posting on the Website. Your continued use of the
              Website after any such changes constitutes your acceptance of the
              new Terms &amp; Conditions.
            </p>
          </article>

          <article>
            <p className="mt-2 text-sm">
              By using this Website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms &amp; Conditions.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};
export default Terms;
