"use client";
import { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Function to check if the input has a close match to the target keyword
const fuzzyMatch = (input: string, target: string): boolean => {
  const normalizedInput = input.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  const normalizedTarget = target.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

  // If the normalized input is a substring of the target, consider it a match
  return normalizedInput.includes(normalizedTarget);
};

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const getSavedMessages = () => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  };

  const saveMessages = (newMessages: { text: string; isUser: boolean }[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(newMessages));
  };

  const getBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
  
    // Work schedule logic (Mon-Thurs, 6am - 4pm PT)
    const isAtWork = () => {
      const now = new Date();
      const day = now.getDay(); // 0 (Sun) to 6 (Sat)
      const hour = now.getHours(); // local time assumed to be Pacific
  
      return day >= 1 && day <= 4 && hour >= 6 && hour < 16;
    };
  
    // Handle "are you at work?" style questions
    if (fuzzyMatch(lowerInput, "are you at work") || fuzzyMatch(lowerInput, "at work now")) {
      return isAtWork() ? "Yes!" : "No, I am available now!";
    }
  
    // Handle time requests
    if (fuzzyMatch(lowerInput, "time")) {
      const now = new Date();
      const pacificTime = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles", hour: 'numeric', minute: 'numeric', hour12: true });
      return `The current Pacific Time is ${pacificTime}.`;
    }

    if (
      lowerInput.includes("education") ||
      lowerInput.includes("school") ||
      lowerInput.includes("degree") ||
      lowerInput.includes("college") ||
      lowerInput.includes("university")
    ) {
      return "I have a Bachelor's degree in Computer Science from San Diego State University.";
    }
  
    // Fuzzy keyword match mapping
    const keywordResponses: { [keyword: string]: string } = {
      "skills": "You can find my skills listed in the <a href='/skills' class='text-yellow-500 hover:text-yellow-400 underline'>Skills</a> section in the navbar. I have expertise in Cybersecurity and programming, and I hold certifications in Security+, Linux+, and System Administration.",
      "background": "I graduated from SDSU in 2024 with a bachelor's in Computer Science and now work as a Computer Scientist.",
      "experience": "I am a Computer Scientist with experience in security analysis and system administration.",
      "contact": "You can contact me by filling out the <a href='/contact' class='text-yellow-500 hover:text-yellow-400 underline'>contact form</a> on the nav bar above.",
      "where do you work": "I work at Naval Information Warfare Center Pacific (NIWC PAC).",
      "hobbies": "I like spending time with friends, gaming, and working on projects like this website!",
      "what do you do for fun": "I like spending time with friends, gaming, and working on projects like this website!",
    };
  
    for (const keyword in keywordResponses) {
      if (fuzzyMatch(lowerInput, keyword)) {
        return keywordResponses[keyword];
      }
    }
  
    const responses: { [key: string]: string } = {
      "who is mark": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "who is mark duraid": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "mark": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "what's your name": "I am Mark Duraid.",
      "what is your name": "I am Mark Duraid.",
      "who are you": "I am Mark Duraid.",
    };
  
    for (const key in responses) {
      if (fuzzyMatch(lowerInput, key)) {
        return responses[key];
      }
    }
  
    return "I'm here to help! Let me know what you need.";
  };
  

  const getAvailability = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 16 || currentHour < 5 ? "I am available now." : "I'm here to help! Let me know what you need.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    saveMessages(newMessages);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const updatedMessages = [...newMessages, { text: botResponse, isUser: false }];
      setMessages(updatedMessages);
      saveMessages(updatedMessages);
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      const savedMessages = getSavedMessages();
      setMessages(savedMessages.length > 0 ? savedMessages : [{ text: "Hello, how can I help you?", isUser: false }]);
    }
  }, [isOpen]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#C9A46A] text-black px-4 py-2 rounded-lg shadow-lg font-semibold hover:text-white transition-colors focus:outline-none"
        >
          Chat with Me
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-black text-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-yellow-500">
          <div className="p-3 bg-[#2a2a2a] text-white font-bold flex justify-center relative">
            <span>Chatbot</span>
            <button
              onClick={() => {
                setIsOpen(false);
                localStorage.removeItem("chatMessages");
              }}
              className="absolute right-3 top-1 text-white hover:text-yellow-500 text-lg font-bold focus:outline-none"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-center space-x-2 ${msg.isUser ? "justify-end" : "justify-start"}`}>
                {msg.isUser ? (
                  <>
                    <div className="p-2 max-w-[80%] rounded-lg bg-yellow-500 text-white self-end">{msg.text}</div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xs font-bold">You</div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 relative">
                   <img src="/images/MD13bgRemoved.png" alt="Bot" className="w-[100%] h-[100%] object-cover absolute top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="p-2 max-w-[80%] rounded-lg bg-[#2a2a2a] text-white self-start">
                      <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                    </div>
                  </>
                )}
              </div>
            ))}
            {/* Add a reference element at the bottom of the message container */}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 flex border-t border-gray-600 bg-[#2a2a2a]">
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
      )}
    </div>
  );
}
