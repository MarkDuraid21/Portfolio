"use client";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Function to get previous messages from localStorage
  const getSavedMessages = () => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  };

  // Function to save messages to localStorage
  const saveMessages = (newMessages: { text: string; isUser: boolean }[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(newMessages));
  };

  // Get bot response
  const getBotResponse = (userInput: string) => {
    const normalizedInput = userInput.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

    if (["who is mark", "who is mark duraid", "mark"].includes(normalizedInput)) {
      return "I'm a Security Analyst and System Administrator with a Computer Science background and a passion for Cybersecurity, based in the United States.";
    } else if (["how do i contact you", "how can i contact you", "contact"].includes(normalizedInput)) {
      return `You can contact me by filling out the <a href="/contact" class="text-yellow-500 hover:text-yellow-400 underline">contact form</a> on the nav bar above and I will reach back out to you.`;
    } else if (["what skills do you have", "what skills does mark have", "skills"].includes(normalizedInput)) {
      return `You can find my skills listed in the <a href="/skills" class="text-yellow-500 hover:text-yellow-400 underline">Skills</a> section in the navbar. I have expertise in Cybersecurity and programming, and I hold certifications in Security+, Linux+, and System Administration.`;
    } else if (["graduate", "when did you graduate", "when did mark graduate", "school"].includes(normalizedInput)) {
      return "I graduated from SDSU in 2024 with a bachelor's in Computer Science.";
    } else if (["what does mark do", "occupation", "what is marks job", "job"].includes(normalizedInput)) {
      return "I am a Computer Scientist at NIWC PAC.";
    } else if (["about", "who are you", "tell me about yourself"].includes(normalizedInput)) {
      return `You can learn more about me on the <a href="/about" class="text-yellow-500 hover:text-yellow-400 underline">About</a> page.`;
    } else if (["education", "where did you study", "your education"].includes(normalizedInput)) {
      return `I graduated from <a href="/education" target="_blank" class="text-yellow-500 hover:text-yellow-400 underline">SDSU</a> with a Bachelor's in Computer Science in 2024.`;
    } else if (["experience", "work experience", "jobs"].includes(normalizedInput)) {
      return `You can view my professional experience in the <a href="/experience" class="text-yellow-500 hover:text-yellow-400 underline">Experience</a> section.`;
    }

    return "I'm here to help! Let me know what you need.";
  };

  // Send a new message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    saveMessages(newMessages);  // Save messages to localStorage

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const updatedMessages = [...newMessages, { text: botResponse, isUser: false }];
      setMessages(updatedMessages);

      saveMessages(updatedMessages);  // Save updated messages to localStorage
    }, 500);
  };

  // On page load or navigation, load saved messages
  useEffect(() => {
    if (isOpen) {
      const savedMessages = getSavedMessages();
      setMessages(savedMessages.length > 0 ? savedMessages : [{ text: "Hello, how can I help you?", isUser: false }]);
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
              onClick={() => {
                setIsOpen(false);
                localStorage.removeItem("chatMessages"); // Optionally clear messages on close
              }}
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
                        className="w-[100%] h-[100%] object-cover absolute top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className="p-2 max-w-[80%] rounded-lg bg-[#2a2a2a] text-white self-start">
                      <span
                        dangerouslySetInnerHTML={{ __html: msg.text }}
                      />
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
