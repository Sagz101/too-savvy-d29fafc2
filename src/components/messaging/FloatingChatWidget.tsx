import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, X, Send, Phone, Video, Search, 
  MoreVertical, Check, CheckCheck, Smile, Paperclip,
  ChevronLeft, Users, Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    online: boolean;
    verified?: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
  status: 'sent' | 'delivered' | 'read';
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    user: { name: 'Maya Chen', avatar: '', online: true, verified: true },
    lastMessage: 'Thanks for the collaboration opportunity!',
    timestamp: '2 min',
    unread: 3
  },
  {
    id: '2',
    user: { name: 'Alex Rodriguez', avatar: '', online: false, verified: true },
    lastMessage: "Let's schedule a call to discuss the NFT drop",
    timestamp: '1 hour',
    unread: 0
  },
  {
    id: '3',
    user: { name: 'Creator DAO', avatar: '', online: true, verified: true },
    lastMessage: 'New proposal for platform fees is live',
    timestamp: '3 hours',
    unread: 5
  }
];

const MOCK_MESSAGES: Message[] = [
  { id: '1', content: "Hey! I saw your latest NFT collection. Really impressive!", timestamp: '10:30 AM', isCurrentUser: false, status: 'read' },
  { id: '2', content: "Thanks Maya! Would you be interested in collaborating?", timestamp: '10:32 AM', isCurrentUser: true, status: 'delivered' },
  { id: '3', content: "Absolutely! I've been wanting to explore generative art on-chain.", timestamp: '10:33 AM', isCurrentUser: false, status: 'read' },
  { id: '4', content: "Let's schedule a call next week to brainstorm!", timestamp: '10:35 AM', isCurrentUser: true, status: 'sent' }
];

export const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const totalUnread = MOCK_CONVERSATIONS.reduce((sum, conv) => sum + conv.unread, 0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true,
      status: 'sent'
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');

    // Simulate typing and reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! I'll get back to you soon.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: false,
        status: 'read'
      }]);
      setIsTyping(false);
    }, 1500);
  }, [newMessage]);

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3" />;
      case 'delivered': return <CheckCheck className="w-3 h-3" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-primary" />;
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl btn-micro ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-6 h-6" />
        {totalUnread > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center font-bold"
          >
            {totalUnread}
          </motion.span>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-card/80 backdrop-blur-sm flex items-center justify-between">
              {activeConversation ? (
                <>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setActiveConversation(null)}
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="relative">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={activeConversation.user.avatar} />
                        <AvatarFallback className="bg-primary/20 text-primary text-sm">
                          {activeConversation.user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {activeConversation.user.online && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm flex items-center gap-1">
                        {activeConversation.user.name}
                        {activeConversation.user.verified && (
                          <Badge variant="secondary" className="text-[10px] px-1 py-0">✓</Badge>
                        )}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {activeConversation.user.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Messages</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeConversation ? (
                  <motion.div
                    key="messages"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="h-full flex flex-col"
                  >
                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-3">
                        {messages.map((msg) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                                msg.isCurrentUser
                                  ? 'bg-primary text-primary-foreground rounded-br-md'
                                  : 'bg-muted text-foreground rounded-bl-md'
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{msg.content}</p>
                              <div className={`flex items-center justify-end gap-1 mt-1 ${
                                msg.isCurrentUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                              }`}>
                                <span className="text-[10px]">{msg.timestamp}</span>
                                {msg.isCurrentUser && getStatusIcon(msg.status)}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                          >
                            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                              <div className="flex gap-1">
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                            </div>
                          </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-border bg-card/50">
                      <div className="flex items-center gap-2">
                        <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                          <Paperclip className="w-4 h-4" />
                        </Button>
                        <Input
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type a message..."
                          className="flex-1 bg-muted/50 border-0 focus-visible:ring-1"
                        />
                        <Button type="button" variant="ghost" size="icon" className="h-9 w-9 shrink-0">
                          <Smile className="w-4 h-4" />
                        </Button>
                        <Button
                          type="submit"
                          size="icon"
                          disabled={!newMessage.trim()}
                          className="h-9 w-9 shrink-0"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="conversations"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    className="h-full flex flex-col"
                  >
                    {/* Search */}
                    <div className="p-3 border-b border-border">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search conversations..."
                          className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
                        />
                      </div>
                    </div>

                    {/* Conversations List */}
                    <ScrollArea className="flex-1">
                      <div className="divide-y divide-border">
                        {MOCK_CONVERSATIONS.map((conv) => (
                          <motion.button
                            key={conv.id}
                            onClick={() => setActiveConversation(conv)}
                            className="w-full p-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
                            whileHover={{ x: 4 }}
                          >
                            <div className="relative">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={conv.user.avatar} />
                                <AvatarFallback className="bg-primary/20 text-primary">
                                  {conv.user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              {conv.user.online && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-foreground text-sm truncate flex items-center gap-1">
                                  {conv.user.name}
                                  {conv.user.verified && (
                                    <Badge variant="secondary" className="text-[10px] px-1 py-0">✓</Badge>
                                  )}
                                </h4>
                                <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                            </div>
                            {conv.unread > 0 && (
                              <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                                {conv.unread}
                              </span>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </ScrollArea>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatWidget;
