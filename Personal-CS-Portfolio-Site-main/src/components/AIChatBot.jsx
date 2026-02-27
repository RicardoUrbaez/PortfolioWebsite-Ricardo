import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

export const AIChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Ricardo’s AI assistant. Ask me about his skills, projects, experience, or education."
    }
  ]);

  const listRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, loading]);

  const buildPrompt = (userText) => {
    return `
You are an AI portfolio assistant for ${profile.name}.
Be professional, friendly, and concise.

Background (use this to answer):
- Computer Science student at Kean University
- Research and Development Intern at Kean's Center for Undergraduate Research
- Desktop Support Technician at Kean IT OCIS
- Supplemental Instructor + Code Samurai CS Tutor
- Technical skills: Java, Python, JavaScript, React, Node/Express, Socket.IO, OpenCV, MediaPipe, PostgreSQL, MongoDB
- Interests: full-stack development, computer vision, and applied AI
- Contact: ${profile.email}, ${profile.website}, ${profile.github}

User question: ${userText}
`;
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const userText = input;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Ensure Puter script is loaded
      if (!window.puter?.ai?.chat) {
        throw new Error("Puter AI not loaded. Did you add the script in index.html?");
      }

      const response = await window.puter.ai.chat(buildPrompt(userText), {
        model: "gpt-5-nano"
      });

      const botReply = { role: "assistant", content: String(response) };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — I couldn't reach the AI service. Make sure the Puter script is added in index.html and try again."
        }
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {open && (
        <div className="w-80 h-[28rem] bg-card border border-border rounded-2xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="font-semibold">AI Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:opacity-80"
            >
              Close
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto p-3 space-y-2 text-sm"
          >
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={index}
                  className={`max-w-[85%] p-2 rounded-lg ${
                    isUser
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              );
            })}

            {loading && (
              <div className="max-w-[85%] p-2 rounded-lg bg-muted text-foreground">
                Typing…
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <textarea
              className="flex-1 border border-border rounded-md px-2 py-2 text-sm bg-background resize-none focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="cosmic-button disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="cosmic-button rounded-full shadow-lg px-5 py-2.5 text-sm md:text-base"
      >
        {open ? "Close AI" : "AI Chat"}
      </button>
    </div>
  );
};