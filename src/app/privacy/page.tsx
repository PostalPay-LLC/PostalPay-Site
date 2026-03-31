import Link from "next/link";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PostalPay",
  description: "PostalPay privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              PostalPay
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: March 30, 2026</p>

        <div className="prose-slate mt-10 space-y-8 text-slate-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <p>
            PostalPay LLC (&quot;PostalPay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the PostalPay mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App.
          </p>

          <h2>1. Information We Collect</h2>
          <p><strong>Account Information:</strong> When you create an account, we collect your email address, phone number, and a password. You may optionally provide your name and employment details (job position, hire date).</p>
          <p><strong>Usage Data:</strong> We collect information you enter into the App, including work hours, clock-in/out times, mileage entries, route information, and pay configuration settings. This data is necessary to provide the App&apos;s core functionality.</p>
          <p><strong>Device Information:</strong> We may collect device type, operating system version, and unique device identifiers for the purpose of providing technical support and improving App performance.</p>
          <p><strong>Location Data:</strong> If you enable location permissions, the App may access your device&apos;s location to assist with mileage tracking. Location data is only accessed when you actively use location-based features and is not continuously tracked in the background.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, operate, and maintain the App&apos;s pay tracking and calculation features</li>
            <li>Create and manage your user account</li>
            <li>Send transactional communications (e.g., verification codes, password resets)</li>
            <li>Respond to customer support requests</li>
            <li>Improve and optimize the App&apos;s performance and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Data Storage and Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use Supabase as our backend infrastructure provider, which provides encrypted data storage and secure authentication. Sensitive credentials are stored using your device&apos;s secure storage (Keychain on iOS, Keystore on Android). The App supports biometric authentication (Face ID, fingerprint) and PIN protection as additional security layers.
          </p>

          <h2>4. Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share limited data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party services that help us operate the App (e.g., cloud hosting, authentication, SMS delivery). These providers are bound by contractual obligations to protect your data.</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>
          <p>You may:</p>
          <ul>
            <li>Access, update, or delete your account information through the App&apos;s settings</li>
            <li>Request a copy of your data by contacting us</li>
            <li>Delete your account at any time, which will remove your data from our servers</li>
            <li>Opt out of non-essential communications</li>
            <li>Disable location permissions through your device settings</li>
          </ul>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13, we will delete it promptly.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy within the App or by other appropriate means. Your continued use of the App after changes are posted constitutes acceptance of the revised policy.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            <strong>PostalPay LLC</strong><br />
            Email: support@postalpay.com
          </p>
        </div>
      </main>
    </>
  );
}
