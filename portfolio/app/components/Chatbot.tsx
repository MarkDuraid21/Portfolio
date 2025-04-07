"use client";
import { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const fuzzyMatch = (input: string, target: string): boolean => {
  const normalizedInput = input.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  const normalizedTarget = target.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  return normalizedInput.includes(normalizedTarget);
};

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; timestamp: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const getSavedMessages = () => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  };

  const saveMessages = (newMessages: { text: string; isUser: boolean; timestamp: string }[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(newMessages));
  };

  const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const getBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    const isAtWork = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      return day >= 1 && day <= 4 && hour >= 6 && hour < 16;
    };

    if (fuzzyMatch(lowerInput, "are you at work") || fuzzyMatch(lowerInput, "at work now")) {
      return isAtWork() ? "Yes!" : "No, I am available now!";
    }

    if (fuzzyMatch(lowerInput, "time")) {
      const now = new Date();
      const pacificTime = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles", hour: 'numeric', minute: 'numeric', hour12: true });
      return `The current Pacific Time is ${pacificTime}.`;
    }

    const keywordResponses: { [keyword: string]: string } = {
      "skills": "You can find my skills listed in the <a href='/skills' class='text-yellow-500 hover:text-yellow-400 underline'>Skills</a> section in the navbar. I have expertise in Cybersecurity and programming, and I hold certifications in Security+, Linux+, and System Administration.",
      "background": "I graduated from SDSU in 2024 with a bachelor's in Computer Science and now work as a Computer Scientist.",
      "experience": "I am a Computer Scientist with experience in security analysis and system administration.",
      "contact": "You can contact me by filling out the <a href='/contact' class='text-yellow-500 hover:text-yellow-400 underline'>contact form</a> on the nav bar above.",
      "where do you work": "I work at Naval Information Warfare Center Pacific (NIWC PAC).",
      "hobbies": "I like spending time with friends, gaming, and working on projects like this website!",
      "what do you do for fun": "I like spending time with friends, gaming, and working on projects like this website!",
      "what do you work on": "I am a Computer Scientist and work on different projects such as cybersecurity!",
      "what do you do at work": "I am a Computer Scientist and work on different projects such as cybersecurity!",
      "education": "Grossmont College for my associate's and SDSU for my bachelor's—both in Computer Science.",
      "degree": "I have an associate's and a bachelor's degree in Computer Science.",
      "jobs": "I've worked as a Computer Scientist, Security Automation Engineer Intern, and Machine Learning Engineer Intern.",
      "work history": "Computer Scientist | July 2024 - Present<br>Security Automation Engineer Intern | Jan 2024 - Mar 2024<br>Machine Learning Engineer Intern | Oct 2023 - Dec 2023",
      "projects": "One of my main projects is the very website you're on right now!",
      "show me your work": "Check out my personal website—this one!",
      "certifications": "CompTIA Security+, Linux+, Red Hat System Administration I (RH124), Microsoft Security Fundamentals",
      "languages": "I speak English and Arabic.",
      "resume": "You can contact me using the <a href='/contact' class='text-yellow-500 hover:text-yellow-400 underline'>contact form</a> to get my resume.",
      "cv": "You can contact me using the <a href='/contact' class='text-yellow-500 hover:text-yellow-400 underline'>contact form</a> to get my resume.",
      "why cs": "I've always loved problem-solving and building things—Computer Science lets me do both!",
      "why cybersecurity": "Cybersecurity excites me because it's like a high-stakes puzzle that protects people and systems.",
      "favorite tech": "I love anything related to AI, security tools, and sleek UI frameworks like Tailwind CSS."
    };

    for (const keyword in keywordResponses) {
      if (fuzzyMatch(lowerInput, keyword)) {
        return keywordResponses[keyword];
      }

    }

    const getWorkingDuration = () => {
      const startDate = new Date("2024-07-29"); 
      const currentDate = new Date();
    
      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
    
      if (months < 0) {
        years--;
        months += 12;
      }
    
      if (years >= 1) {
        return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
      } else {
        return `${months} month${months !== 1 ? 's' : ''}`;
      }
    };
    

    const responses: { [key: string]: string } = {
      "who is mark": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "who is mark duraid": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "mark": "I'm Mark Duraid, a Computer Scientist and Cybersecurity enthusiast based in the United States.",
      "what's your name": "I am Mark Duraid.",
      "what is your name": "I am Mark Duraid.",
      "who are you": "I am Mark Duraid.",
      "where are you from": "I am originally from Baghdad Iraq, but I live in the United States.",
      "what school did you go to": "I graduated from SDSU in 2024 with a bachelor's in Computer Science.",
      "how long have you been working?": `I have been working as a computer scientist for about ${getWorkingDuration()}.`,
      "how long have you been a computer scientist?": `I have been working as a computer scientist for about ${getWorkingDuration()}.`,
      "linkedin": "You can check out my LinkedIn profile here: <a href='https://www.linkedin.com/in/markduraid/' class='text-yellow-500 hover:text-yellow-400 underline' target='_blank'>Mark Duraid's LinkedIn</a>",
      "can we communicate?": "Yes, you can communicate with me through my <a href='/contact' class='text-yellow-500 hover:text-yellow-400 underline'>contact form</a> or by connecting with me on <a href='https://www.linkedin.com/in/markduraid/' class='text-yellow-500 hover:text-yellow-400 underline' target='_blank'>LinkedIn</a>.",
    };

    for (const key in responses) {
      if (fuzzyMatch(lowerInput, key)) {
        return responses[key];
      }
    }

    return "I'm here to help! Let me know what you need.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true, timestamp: getTimestamp() }];
    setMessages(newMessages);
    setInput("");
    saveMessages(newMessages);

    setIsTyping(true);
    setHasInteracted(true); // User has interacted
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const updatedMessages = [...newMessages, { text: botResponse, isUser: false, timestamp: getTimestamp() }];
      setMessages(updatedMessages);
      setIsTyping(false);
      saveMessages(updatedMessages);
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      const savedMessages = getSavedMessages();
      setMessages(savedMessages.length > 0 ? savedMessages : [{ text: "Hello, how can I help you?", isUser: false, timestamp: getTimestamp() }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const quickPrompts = ["What are your skills?", "Where do you work?", "Show me your work", "What's your background?"];

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
        <div className="w-80 h-[30rem] bg-black text-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-[#C9A46A]">
          <div className="p-3 bg-[#2a2a2a] text-white font-bold flex justify-center relative">
            <span>Chatbot</span>
            <button
              onClick={() => {
                setIsOpen(false);
                localStorage.removeItem("chatMessages");
              }}
              className="absolute right-3 top-1 text-white hover:text-[#C9A46A] text-lg font-bold focus:outline-none"
            >
              ✖
            </button>
          </div>

          {/* Only show quick prompts if the user hasn't interacted yet */}
          {!hasInteracted && (
            <div className="flex flex-wrap gap-2 justify-center p-2 bg-black border-b border-[#C9A46A]">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(prompt)}
                  className="chatbot-btn"
                  style={{ fontSize: "11px", padding: "0.6rem 0.6rem", lineHeight: "0.3", borderColor: "#C9A46A",  backgroundColor: "#2a2a2a"}}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col space-y-1 ${msg.isUser ? "items-end" : "items-start"}`}>
                <div className={`flex items-center space-x-2 ${msg.isUser ? "justify-end" : "justify-start"}`}>
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
                <div className="text-xs text-gray-400">{msg.timestamp}</div>
              </div>
            ))}
            {isTyping && <div className="text-sm text-gray-400">Mark is typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 flex border-t border-gray-600 bg-[#2a2a2a]">
          <input
            type="text"
            className="flex-1 p-2 bg-[#2a2a2a] text-white border-none outline-none placeholder-gray-400 rounded-l-lg"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="flex items-center justify-center p-2 bg-[#2a2a2a] border-l border-[#C9A46A] rounded-r-lg hover:bg-[#C9A46A] focus:outline-none"
          >
            <FaPaperPlane className="text-yellow-500 w-5 h-5" />
          </button>
        </div>
        </div>
      )}
    </div>
  );
}
