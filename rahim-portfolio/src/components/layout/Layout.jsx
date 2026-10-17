import Navbar from './Navbar';
import Footer from './Footer';
import MatrixRain from '../ui/MatrixRain';
import ChatBot from '../ui/ChatBot';   // ← IMPORT

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <MatrixRain />

      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>

      {/* Floating chatbot — har page pe */}
      <ChatBot />
    </div>
  );
}