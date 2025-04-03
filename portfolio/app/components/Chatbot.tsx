"use client";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getBotResponse = (userInput: string) => {
    const normalizedInput = userInput.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    
    if (["who is mark", "who is mark duraid", "mark"].includes(normalizedInput)) {
      return "I'm a Security Analyst and System Administrator with a Computer Science background and a passion for Cybersecurity, based in the United States.";
    } else if (["how do i contact you", "how can i contact you", "contact"].includes(normalizedInput)) {
      return "You can contact me by filling out the contact form on the nav bar above and I will reach back out to you.";
    } else if (["what skills do you have", "what skills does mark have", "skills"].includes(normalizedInput)) {
      return "You can find my skills listed in the Skills section in the navbar. I have expertise in Cybersecurity and programming, and I hold certifications in Security+, Linux+, and System Administration.";
    } else if (["graduate", "when did you graduate", "when did mark graduate"].includes(normalizedInput)) {
      return "I graduated from SDSU in 2024 with a bachelor's in Computer Science.";
    } else if (["what does mark do", "occupation", "what is marks job", "job"].includes(normalizedInput)) {
      return "I am a Computer Scientist at NIWC PAC.";
    }
    
    return "I'm here to help! Let me know what you need.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { text: botResponse, isUser: false }]);
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: "Hello, how can I help you?", isUser: false }]);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#C9A46A] text-black px-4 py-2 rounded-lg shadow-lg font-semibold hover:text-yellow-500 transition-colors focus:outline-none"
        >
          Chat with Me
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-black text-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-yellow-500">
          {/* Header */}
          <div className="p-3 bg-[#2a2a2a] text-white font-bold flex justify-center relative">
            <span>Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-1 text-white hover:text-yellow-500 text-lg font-bold focus:outline-none"
            >
              ✖
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                {msg.isUser ? (
                  <>
                    <div className="p-2 max-w-[80%] rounded-lg bg-yellow-500 text-white self-end">
                      {msg.text}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xs font-bold">
                      You
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 relative">
                      <img
                        src="/images/MD13bgRemoved.png"
                        alt="Bot"
                        className="w-[90%] h-[90%] object-cover absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className="p-2 max-w-[80%] rounded-lg bg-[#2a2a2a] text-white self-start">
                      {msg.text}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-2 flex border-t border-gray-600 bg-[#2a2a2a]">
            <div className="flex flex-1 bg-[#2a2a2a] rounded-lg px-2 items-center">
              <input
                type="text"
                className="flex-1 p-2 bg-[#2a2a2a] text-white border-none outline-none placeholder-gray-400"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage} className="focus:outline-none">
                <FaPaperPlane className="text-yellow-500 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}