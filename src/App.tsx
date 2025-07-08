import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import InvestmentPlansPage from "./pages/InvestmentPlansPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SupportPage from "./pages/SupportPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import TermsPage from "./pages/TermsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import DashboardPage from "./pages/dashboard"
import InvestPage from "./pages/dashboard/invest"
import WithdrawalPage from "./pages/dashboard/withdrawal"
import ProfilePage from "./pages/dashboard/profile"

// Admin Pages
import AdminLoginPage from "./pages/admin/login"
import AdminRegisterPage from "./pages/admin/register"
import AdminDashboardPage from "./pages/admin/dashboard"
import AdminMembersPage from "./pages/admin/members"
import AdminSupportMessagesPage from "./pages/admin/support-messages"
import AdminFundUsersPage from "./pages/admin/fund-users"
import AdminApproveDepositsPage from "./pages/admin/approve-deposits"
import AdminApproveWithdrawalsPage from "./pages/admin/approve-withdrawals"

function App() {
  return (
    <div className="min-h-screen bg-kryptex-dark text-white">
      {/* Only show Navbar on non-dashboard and non-admin routes */}
      <Routes>
        <Route path="/dashboard/*" element={null} />
        <Route path="/admin/*" element={null} />
        <Route path="*" element={<Navbar />} />
      </Routes>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/investment-plans" element={<InvestmentPlansPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* User Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/invest" element={<InvestPage />} />
        <Route path="/dashboard/withdrawal" element={<WithdrawalPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/members" element={<AdminMembersPage />} />
        <Route path="/admin/support-messages" element={<AdminSupportMessagesPage />} />
        <Route path="/admin/fund-users" element={<AdminFundUsersPage />} />
        <Route path="/admin/approve-deposits" element={<AdminApproveDepositsPage />} />
        <Route path="/admin/approve-withdrawals" element={<AdminApproveWithdrawalsPage />} />
      </Routes>

      {/* Only show Footer on non-dashboard and non-admin routes */}
      <Routes>
        <Route path="/dashboard/*" element={null} />
        <Route path="/admin/*" element={null} />
        <Route path="*" element={<Footer />} />
      </Routes>
    </div>
  )
}

export default App
