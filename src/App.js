import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfilePage from './components/ProfilePage1';
import EditProfile from './components/EditProfile';  // Import the EditProfile component
import ChangePassword from './components/ChangePassword';  // Import the ChangePassword component
import Dashboard from './components/Dashboard';
import ActivityCard from './components/ActivityCard';
import FinanceDashboard from "./components/FinanceDashboard";
import HelpPage from "./components/HelpPage";
import SendRequest from "./components/SendRequest";
import RecentContacts from "./components/RecentContacts";
import FinanceCards from "./components/FinanceCards";
import AllSends from "./components/AllSends";
import AllContacts from "./components/AllContacts";
import AllRequests from "./components/AllRequests";
import FinanceDashboardOfSendRequest from "./components/FinanceDashboardOfSendRequest";
import MoneyShared from "./components/MoneyShared";
import LinkBank from "./components/LinkBank";
import LinkCard from "./components/LinkCard";
import WalletBalance from "./components/WalletBalance";
import PaymentMethods from "./components/PaymentMethods";
import TransactionsList from "./components/TransactionsList";
import Notification from "./components/Notification";
import IntegrateNotification from "./components/IntegrateNotification";



import {
  AcceptOnlinePayments,
  Error,
  Freelancers,
  GetPaid,
  Homepage,
  Login,
  Merchant,
  MobileApps,
  PartnersAndDevelopers,
  PayOnline,
  Personal,
  SendInvoice,
  SendPayments,
  Shopping,
  SignUp,
  PersonalAccount,
  BusinessAccount,
} from "./pages";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/personal" element={<Personal />}></Route>
          <Route path="/pay-online" element={<PayOnline />}></Route>
          <Route path="/send-money-online" element={<SendPayments />}></Route>
          <Route path="/requesting-payments" element={<GetPaid />}></Route>
          <Route path="/mobile-apps" element={<MobileApps />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/merchant" element={<Merchant />}></Route>
          <Route
            path="/accept-payments-online"
            element={<AcceptOnlinePayments />}
          ></Route>
          <Route path="/email-invoice" element={<SendInvoice />}></Route>
          <Route path="/freelancers" element={<Freelancers />}></Route>
          <Route
            path="/partners-and-developers"
            element={<PartnersAndDevelopers />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/personal-account" element={<PersonalAccount />}></Route>
          <Route path="/business-account" element={<BusinessAccount />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* Add other routes as needed */}
      </Routes>

      <Routes>
        <Route path="/helppage" element={<HelpPage />} />
        <Route path="/activitycard" element={<ActivityCard />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/sendrequest" element={<SendRequest />} /> 
        <Route path="/recentcontacts" element={<RecentContacts />} /> 
        <Route path="/financecards" element={<FinanceCards />} /> 
        <Route path="/financedashboard" element={<FinanceDashboard />} /> 
        <Route path="/financedashboardofsendrequest" element={<FinanceDashboardOfSendRequest />} /> 
        <Route path="/allsends" element={<AllSends />} />
        <Route path="/allcontacts" element={<AllContacts />} /> 
        <Route path="/allrequests" element={<AllRequests />} />  
        <Route path="/moneyshared" element={<MoneyShared />} />  
        <Route path="/linkbank" element={<LinkBank />} />  
        <Route path="/linkcard" element={<LinkCard />} />
        <Route path="/walletbalance" element={<WalletBalance />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />  
        <Route path="/transactionlist" element={<TransactionsList />} />  
        <Route path="/notification" element={<Notification />} /> 
        <Route path="/integratenotification" element={<IntegrateNotification />} />    

        
        

        {/* /* Add other routes as needed */}
      </Routes>
        


        <Footer />
      </BrowserRouter>
    </>
  );
}



