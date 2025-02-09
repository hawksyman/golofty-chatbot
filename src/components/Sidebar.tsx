
import { Menu, MessageSquarePlus, Globe, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onApiKeyChange: (apiKey: string) => void;
}

const Sidebar = ({ isOpen, onToggle, onApiKeyChange }: SidebarProps) => {
  const [apiKey, setApiKey] = useState("");
  const chatHistory = [
    { title: "Design System Discussion" },
    { title: "Project Planning" },
    { title: "Code Review Session" },
    { title: "Bug Fix Analysis" },
    { title: "Feature Implementation" }
  ];

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    onApiKeyChange(newApiKey);
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 z-40 h-screen bg-white border-r transition-all duration-300",
      isOpen ? "w-64" : "w-0"
    )}>
      <nav className="flex h-full w-full flex-col px-3" aria-label="Chat history">
        <div className="flex justify-between flex h-[60px] items-center">
          <button onClick={onToggle} className="h-10 rounded-lg px-2 text-gray-600 hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto">
          {isOpen && (
            <div className="flex flex-col gap-2 px-2">
              <button className="sidebar-item bg-gray-100">
                <MessageSquarePlus className="h-4 w-4" />
                <span>New Chat</span>
              </button>

              <button className="sidebar-item">
                <Globe className="h-4 w-4" />
                <span>Explore go:lofty</span>
              </button>

              <div className="mt-4">
                <div className="px-3 py-2 text-xs text-gray-500">Recent Chats</div>
                {chatHistory.map((chat) => (
                  <div key={chat.title} className="sidebar-item">
                    <span className="text-sm">{chat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {isOpen && (
          <div className="flex flex-col py-2 border-t border-gray-200">
            <button className="sidebar-item">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300">
                  <User className="h-4 w-4" />
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">User Profile</span>
                  <span className="text-xs text-gray-500">Settings & preferences</span>
                </div>
              </div>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
