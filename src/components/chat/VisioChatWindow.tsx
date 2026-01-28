import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

interface CtaButton {
  label: string;
  url: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  ctaButtons?: CtaButton[];
}

interface VisioChatWindowProps {
  onClose: () => void;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/visio-chat`;

// Parse CTA buttons from message content
const parseCtaButtons = (content: string): { cleanContent: string; ctaButtons: CtaButton[] } => {
  const ctaRegex = /\[CTA:([^\|]+)\|([^\]]+)\]/g;
  const ctaButtons: CtaButton[] = [];
  let match;
  
  while ((match = ctaRegex.exec(content)) !== null) {
    ctaButtons.push({
      label: match[1].trim(),
      url: match[2].trim(),
    });
  }
  
  const cleanContent = content.replace(ctaRegex, "").trim();
  return { cleanContent, ctaButtons };
};

export function VisioChatWindow({ onClose }: VisioChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const streamChat = async (userMessage: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: userMessage,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setInput("");

    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Erreur de connexion");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      const assistantId = crypto.randomUUID();

      // Add empty assistant message
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        // Process line by line
        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: assistantContent } : m
                )
              );
            }
          } catch {
            // Incomplete JSON, put back and wait for more
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Process remaining buffer
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
            }
          } catch {
            // Ignore partial leftovers
          }
        }
      }

      // Parse CTA buttons from final content
      const { cleanContent, ctaButtons } = parseCtaButtons(assistantContent);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: cleanContent, ctaButtons }
            : m
        )
      );
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Une erreur est survenue";
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Désolé, ${errorMessage}. Veuillez réessayer ou contacter le studio directement via la page Contact.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    streamChat(input.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed z-50 backdrop-blur-2xl bg-white border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col",
        // Desktop: floating window anchored to right
        "md:bottom-24 md:right-6 md:left-auto md:top-auto md:w-[380px] md:h-[550px] md:max-h-[80vh] md:rounded-2xl",
        // Mobile: anchored to right with max width
        "bottom-20 right-4 left-4 top-auto h-[70vh] max-h-[500px] rounded-2xl",
        "sm:left-auto sm:w-[360px]"
      )}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b border-gray-200 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center bg-white/20">
            <Sparkles className="w-4 h-4 text-gray-900" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-bold text-gray-900 truncate">
              Parler avec Visio
            </h3>
            <p className="text-sm font-medium text-gray-800 line-clamp-2">
              Questions sur Nova Visio, les offres ou le fonctionnement du studio ?
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-gray-50"
      >
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
              }}
            >
              <Bot className="w-8 h-8 text-gray-900" />
            </div>
            <p className="text-gray-700 text-base font-medium mb-4">
              Bonjour ! Je suis <strong className="font-bold text-gray-900">Visio</strong>, l'assistant du studio Nova Visio.
              <br />
              Comment puis-je vous aider ?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Quels services proposez-vous ?",
                "Combien coûte un site web ?",
                "Quelle est la durée d'un projet ?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => streamChat(suggestion)}
                  className="px-3 py-2 text-sm font-semibold rounded-full transition-colors hover:opacity-80"
                  style={{ 
                    border: "1px solid #C3B68F",
                    color: "#C3B68F"
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex gap-3",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
                }}
              >
                <Bot className="w-4 h-4 text-gray-900" />
              </div>
            )}

            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-3",
                message.role === "user"
                  ? "rounded-br-md"
                  : "bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100"
              )}
              style={message.role === "user" ? {
                background: "linear-gradient(135deg, #DCCB99, #C3B68F)",
                color: "#1a1a2e"
              } : undefined}
            >
              {message.role === "assistant" ? (
                <>
                  <div className="prose prose-base max-w-none text-base leading-relaxed text-gray-800">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 text-gray-800 text-base">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-4 mb-2 text-gray-800 text-base">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-4 mb-2 text-gray-800 text-base">{children}</ol>
                        ),
                        li: ({ children }) => <li className="mb-1 text-gray-800 text-base">{children}</li>,
                        strong: ({ children }) => (
                          <strong className="font-bold text-base" style={{ color: "#C3B68F" }}>
                            {children}
                          </strong>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="underline font-semibold"
                            style={{ color: "#C3B68F" }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                  {/* CTA Buttons */}
                  {message.ctaButtons && message.ctaButtons.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                      {message.ctaButtons.map((cta, index) => (
                        <Link
                          key={index}
                          to={cta.url}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 hover:scale-105"
                          style={{
                            background: "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
                            color: "hsl(230 78% 9%)",
                          }}
                        >
                          {cta.label}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-base font-medium leading-relaxed">{message.content}</p>
              )}
            </div>

            {message.role === "user" && (
              <div 
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #DCCB99, #C3B68F)" }}
              >
                <User className="w-4 h-4 text-gray-900" />
              </div>
            )}
          </motion.div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(43 35% 67%), hsl(40 28% 55%))",
              }}
            >
              <Bot className="w-4 h-4 text-gray-900" />
            </div>
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
              <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 bg-white"
      >
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Posez votre question..."
            rows={1}
            className="flex-1 resize-none bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-base font-medium text-gray-800 placeholder:text-gray-500 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
            disabled={isLoading}
          />
          <Button
            type="submit"
            variant="gold"
            size="icon"
            className="h-12 w-12 rounded-xl"
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
