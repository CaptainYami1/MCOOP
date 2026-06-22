import { PageLayout } from "../components/PageLayout";

const PrivacyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Last updated: June 2026"
    >
      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">1. Information we collect</h2>
        <p>
          We collect information you provide during registration and KYC,
          including your name, phone number, email address, BVN, residential
          address, and cooperative activity data such as savings, loans, and
          transactions.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">2. How we use your information</h2>
        <p>
          Your information is used to administer cooperative membership, process
          savings and loan applications, verify identity, provide customer
          support, improve our services, and comply with regulatory requirements.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">3. Data sharing</h2>
        <p>
          We do not sell your personal data. We may share information with
          regulated partners (such as HMO and insurance providers), payment
          processors, and authorities when required by law or cooperative
          governance rules.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">4. Security</h2>
        <p>
          MCOOP uses encryption, secure authentication, and access controls to
          protect your account and transaction data. You are responsible for
          keeping your password confidential and reporting unauthorized access
          immediately.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">5. Data retention</h2>
        <p>
          We retain your information for as long as your membership is active
          and as required by cooperative regulations and applicable law. You may
          request access to or correction of your personal data by contacting
          support.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">6. Your rights</h2>
        <p>
          You have the right to access, update, and request deletion of your
          personal data subject to legal and cooperative obligations. Contact{" "}
          <a href="mailto:privacy@mcoop.ng" className="text-[#114C3B] font-medium hover:underline">
            privacy@mcoop.ng
          </a>{" "}
          for privacy-related requests.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">7. Contact</h2>
        <p>
          For questions about this Privacy Policy, email{" "}
          <a href="mailto:privacy@mcoop.ng" className="text-[#114C3B] font-medium hover:underline">
            privacy@mcoop.ng
          </a>
          .
        </p>
      </section>
    </PageLayout>
  );
};

export default PrivacyPage;
