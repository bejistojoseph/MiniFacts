
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-display font-bold mb-6 text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: May 12, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>
                At Minifacts, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features, or resources we make available on our site.
              </p>

              <h3>Personal Data</h3>
              <p>
                When you subscribe to our newsletter or contact us through our website, we may collect:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Messages sent through our contact form</li>
              </ul>

              <h3>Usage Data</h3>
              <p>
                We may also collect information on how the website is accessed and used (Usage Data). This Usage Data may include:
              </p>
              <ul>
                <li>Your computer's Internet Protocol address (IP address)</li>
                <li>Browser type and version</li>
                <li>Pages of our website that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Other diagnostic data</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>Minifacts may use the information we collect from you for the following purposes:</p>
              <ul>
                <li>To provide and maintain our website</li>
                <li>To notify you about changes to our website</li>
                <li>To allow you to participate in interactive features on our website</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our website</li>
                <li>To send you the newsletter you subscribed to</li>
                <li>To monitor the usage of our website</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our website, provide the website on our behalf, perform website-related services, or assist us in analyzing how our website is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>

              <h2>Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>

              <h2>Your Data Protection Rights</h2>
              <p>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <ul>
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>By email: privacy@minifacts.com</li>
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

export default PrivacyPolicy;
