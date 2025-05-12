
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-display font-bold mb-6 text-gray-900">Terms of Service</h1>
              <p className="text-gray-600">Last Updated: May 12, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Minifacts website.
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2>1. Content</h2>
              <p>
                Our Service allows you to access educational content, facts, tips, and other materials ("Content"). The Content is owned by Minifacts and is protected by copyright, trademark, and other laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to access and view the Content solely for your personal, non-commercial purposes. You may not:
              </p>
              <ul>
                <li>Reproduce, distribute, publicly display, or publicly perform the Content;</li>
                <li>Modify or create derivative works of the Content;</li>
                <li>Use the Content for any commercial purpose;</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Minifacts website;</li>
                <li>Remove any copyright or other proprietary notations from the Content;</li>
                <li>Transfer the Content to another person or "mirror" the Content on any other server.</li>
              </ul>

              <h2>2. User Contributions</h2>
              <p>
                The Service may provide certain features that enable users to submit content or materials ("User Contributions"). By providing any User Contribution, you grant us and our affiliates a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul>
                <li>You own or control all rights to the User Contributions;</li>
                <li>All User Contributions comply with these Terms of Service;</li>
                <li>User Contributions are accurate and not misleading;</li>
                <li>User Contributions do not violate the rights of any third party.</li>
              </ul>

              <h2>3. Prohibited Uses</h2>
              <p>You agree not to use the Service:</p>
              <ul>
                <li>In any way that violates any applicable federal, state, local, or international law or regulation;</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation;</li>
                <li>To impersonate or attempt to impersonate Minifacts, a Minifacts employee, another user, or any other person or entity;</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service;</li>
                <li>To attempt to bypass any security measures or access any area of the Service that you are not authorized to access.</li>
              </ul>

              <h2>4. Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by Minifacts. Minifacts has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that Minifacts shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>

              <h2>5. Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>

              <h2>6. Disclaimer</h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p>
                Minifacts does not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall Minifacts, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>

              <h2>9. Changes to Terms of Service</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul>
                <li>By email: legal@minifacts.com</li>
                <li>By visiting the contact page on our website</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
