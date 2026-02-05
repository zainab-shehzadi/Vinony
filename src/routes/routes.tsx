import { Navigate, type RouteObject } from "react-router-dom";

import { PATH } from "../constants/paths";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import PublicLayout from "@/components/layout/PublicLayout";
import DashboardLayout from "@/components/layout/Dashboard/DashboardLayout";
import Chat from "@/pages/dashboard/chat/Chat";
import ContactUs from "@/pages/support/ContactUs";
import ImageSection from "@/pages/dashboard/images/ImageSection";
import LandingPage from "@/pages/landingPage/page";
import PricingPage from "@/pages/pricing/PricingPage";
import AIModelPage from "@/pages/aIModels/AIModel";
import NotFound from "@/pages/notFound";
import TermAndCondition from "@/pages/legal/TermsAndConditions";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import VideoSection from "@/pages/dashboard/videos/VideoSection";
import AgentSection from "@/pages/dashboard/agents/AgentSection";
import BillingSection from "@/pages/dashboard/billings/BillingSection";
import ProfilePage from "@/pages/dashboard/settings/SettingPages/ProfilePage";
import SubscriptionPage from "@/pages/dashboard/settings/SettingPages/SubscriptionPage";
import AccountPage from "@/pages/dashboard/settings/SettingPages/AccountPage";
import EditBillingInfoPage from "@/pages/dashboard/settings/SettingPages/EditBillingInfoPage";
import PaymentPage from "@/pages/dashboard/settings/SettingPages/PaymentPage";
import NotificationPage from "@/pages/notification/page";
import TotalInvoices from "@/pages/dashboard/billings/TotalInvoices";
import BuyCredits from "@/pages/dashboard/billings/BuyCredits";
import ModelDetailPage from "@/pages/aIModels/ModelDetailPage";


export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: PATH.HOME, element: <LandingPage /> },
      { path: PATH.LOGIN, element: <SignIn /> },
      { path: PATH.REGISTER, element: <SignUp /> },
      { path: PATH.FORGETPASSWORD, element: <ForgotPassword /> },
      { path: PATH.RESETPASSWORD, element: <ResetPassword /> },
      { path: PATH.CONTACT, element: <ContactUs /> },
      { path: PATH.PRICING, element: <PricingPage /> },
      { path: PATH.AIMODEL, element: <AIModelPage /> },
      { path: PATH.AIMODEL_DETAIL, element: <ModelDetailPage /> },

      { path: PATH.PRIVACY, element: <PrivacyPolicy /> },
      { path: PATH.TERMS, element: <TermAndCondition /> },
    ],
  },

  {
    // element: <PrivateRoute />, 
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: PATH.CHAT, element: <Chat /> },
          { path: PATH.IMAGE, element: <ImageSection /> },
          { path: PATH.VIDEO, element: <VideoSection /> },
          { path: PATH.AGENT, element: <AgentSection /> },
          { path: PATH.BILLING, element: <BillingSection /> },
          { path: PATH.INVOICE, element: <TotalInvoices /> },
          { path: PATH.CREDIT, element: <BuyCredits /> },
          { path: PATH.SETTING, element: <Navigate to="/settings/profile" replace /> },
          { path: "/settings/profile", element: <ProfilePage /> },
          { path: "/settings/subscription", element: <SubscriptionPage /> },
          { path: "/settings/account", element: <AccountPage /> },
          { path: "/settings/subscription/edit-info", element: <EditBillingInfoPage /> },
          { path: "/settings/payment", element: <PaymentPage /> },
          { path: PATH.NOTIFICATION, element: <NotificationPage /> },

        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
];
