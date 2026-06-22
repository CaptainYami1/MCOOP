import { PageLayout } from "../components/PageLayout";

const TermsPage = () => {
  return (
    <PageLayout
      title="Terms & Conditions"
      subtitle="Last updated: June 2026"
    >
      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">1. Introduction</h2>
        <p>
          These Terms & Conditions govern your access to and use of the MCOOP
          digital platform and the cooperative services provided by More
          Prosperity Cooperative Multipurpose Society. By registering or using
          MCOOP, you agree to these terms.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">2. Membership</h2>
        <p>
          Membership is open to eligible individuals who join through a verified
          circle or create a new trusted community with at least 10 members.
          You must provide accurate information during registration and complete
          identity verification (KYC) as required.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">3. Savings & contributions</h2>
        <p>
          Savings plans and contribution schedules are selected by members based
          on their income cycle. All contributions are recorded transparently on
          the platform. Withdrawals and plan changes are subject to cooperative
          rules and applicable notice periods.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">4. Loans</h2>
        <p>
          Loan eligibility is based on savings consistency, membership standing,
          and guarantor support — not traditional collateral. Interest rates,
          fees, and repayment terms are disclosed before approval. Default may
          affect your standing and that of your guarantor and circle.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">5. Platform use</h2>
        <p>
          You agree to use MCOOP lawfully and not to misuse the platform, share
          login credentials, or engage in fraudulent activity. MCOOP reserves the
          right to suspend accounts that violate these terms or cooperative
          policies.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">6. Limitation of liability</h2>
        <p>
          MCOOP provides the platform to administer cooperative services. While
          we strive for reliability and security, we are not liable for losses
          arising from circumstances beyond our reasonable control, including
          network outages or third-party service failures.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-lg text-[#1E1E1E] mb-2">7. Changes to terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the
          platform after changes are published constitutes acceptance of the
          revised terms.
        </p>
      </section>
    </PageLayout>
  );
};

export default TermsPage;
