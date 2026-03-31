import Link from "next/link";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - PostalPay",
  description: "PostalPay terms of service — the rules and guidelines for using our app.",
};

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: March 30, 2026</p>

        <div className="prose-slate mt-10 space-y-8 text-slate-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the PostalPay mobile application (&quot;App&quot;) operated by PostalPay LLC (&quot;PostalPay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the App, you confirm that you are at least 13 years of age and agree to comply with these Terms. If you do not agree, do not use the App.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            PostalPay is a personal pay tracking tool designed for USPS employees. The App allows users to log work hours, track mileage, and calculate estimated pay based on user-provided information. PostalPay is an independent product and is not affiliated with, endorsed by, or sponsored by the United States Postal Service (USPS).
          </p>

          <h2>3. Account Registration</h2>
          <p>
            You must create an account to use certain features of the App. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to the App&apos;s systems or other users&apos; accounts</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use the App to transmit malicious code or interfere with its operation</li>
            <li>Reproduce, distribute, or create derivative works from the App without permission</li>
          </ul>

          <h2>5. Pay Calculations Disclaimer</h2>
          <p>
            The pay calculations provided by the App are <strong>estimates only</strong> and are based on the information you enter. PostalPay does not guarantee the accuracy of any calculations. Actual pay may differ based on factors including but not limited to: payroll processing, tax withholdings, benefits deductions, union dues, and USPS policy changes. You should always verify your earnings against your official USPS pay stub. PostalPay is not responsible for any discrepancies between estimated and actual pay.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The App and its original content, features, and functionality are owned by PostalPay LLC and are protected by copyright, trademark, and other intellectual property laws. Our trademarks may not be used in connection with any product or service without our prior written consent.
          </p>

          <h2>7. User Data</h2>
          <p>
            You retain ownership of the data you enter into the App. By using the App, you grant us a limited license to process your data solely for the purpose of providing the App&apos;s services. Please refer to our <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-primary-dark">Privacy Policy</Link> for details on how we handle your information.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business. You may also delete your account at any time through the App&apos;s settings.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, PostalPay LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability for any claim arising from these Terms or the App shall not exceed the amount you paid us, if any, in the twelve months preceding the claim.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of material changes through the App or by other appropriate means. Your continued use of the App after such notice constitutes acceptance of the updated Terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
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
