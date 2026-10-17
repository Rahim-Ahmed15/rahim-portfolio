import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX, FiMessageCircle, FiCpu } from 'react-icons/fi';
import { knowledge, fallback } from '../../data/chatbot-knowledge';

// ---------- Matching logic ----------
function findAnswer(userInput) {
  const input = userInput.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!input) return fallback;

  let best = { score: 0, answer: fallback };

  for (const entry of knowledge) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (input.includes(kw.toLowerCase())) {
        score += kw.length + (entry.priority || 0);
      }
    }
    if (score > best.score) {
      best = { score, answer: entry.answer };
    }
  }

  return best.score > 0 ? best.answer : fallback;
}

// ---------- Typing indicator ----------
function TypingDots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-neon"
          animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// ---------- ChatBot Component ----------
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! 👋 I'm Rahim's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = (text) => {
    const userText = text ?? input;
    if (!userText.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setTyping(true);

    // Simulate thinking delay for realism
    setTimeout(() => {
      const answer = findAnswer(userText);
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    }, 600 + Math.random() * 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const suggestions = ['Skills', 'Projects', 'Contact', 'Available?'];

  return (
    <>
      {/* -------- Floating button -------- */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-neon to-emerald-500 text-neutral-950 shadow-[0_0_30px_rgba(0,255,136,0.6)] hover:shadow-[0_0_50px_rgba(0,255,136,0.9)] transition-all flex items-center justify-center animate-glow-pulse"
            aria-label="Open chat"
          >
            <FiMessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* -------- Chat window -------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-sm h-[520px] rounded-2xl overflow-hidden flex flex-col bg-neutral-950/95 backdrop-blur-xl border border-neon/30 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(0,255,136,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-neon/20 bg-neutral-900/60">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon to-emerald-600 flex items-center justify-center">
                <FiCpu className="text-neutral-950" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Rahim's AI</p>
                <p className="text-xs text-neon flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                  Online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-neutral-400 hover:text-neon transition-colors p-1"
                aria-label="Close chat"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-br from-neon to-emerald-500 text-neutral-950 rounded-br-sm'
                        : 'bg-neutral-800/80 text-neutral-100 rounded-bl-sm border border-white/5'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl bg-neutral-800/80 border border-white/5 rounded-bl-sm">
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>

            {/* Quick suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-neon/30 text-neon hover:bg-neon/10 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-neon/20 bg-neutral-900/60"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Rahim..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-950/70 border border-white/10 focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/30 transition text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon to-emerald-500 text-neutral-950 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all"
                aria-label="Send"
              >
                <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}