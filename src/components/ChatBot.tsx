import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Dumbbell } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const FitnessBot = {
  responses: {
    greeting: [
      "Hey there, fitness champion! 💪 Ready to crush your goals today?",
      "Hello! I'm your fitness buddy. What can I help you with? 🏋️‍♀️",
      "Welcome back! Let's make today a strong day! 💪"
    ],
    weight_loss: [
      "Great goal! Start with daily walks and bodyweight exercises. Consistency is key! 💪",
      "Weight loss is 70% diet, 30% exercise. Focus on whole foods and stay active! 🥗",
      "Create a calorie deficit with healthy eating and regular cardio. You've got this! 🏃‍♀️"
    ],
    muscle_building: [
      "Focus on compound movements like squats, deadlifts, and push-ups. Progressive overload is key! 💪",
      "Eat plenty of protein and lift heavy. Rest days are just as important! 🏋️‍♂️",
      "Start with bodyweight exercises and gradually add weights. Form over speed! 💪"
    ],
    nutrition: [
      "Eat the rainbow! Lots of veggies, lean proteins, and complex carbs. Stay hydrated! 🥗",
      "Pre-workout: banana or oats. Post-workout: protein and carbs within 30 minutes! 🍌",
      "Meal prep is your friend! Plan ahead for success. You've got this! 🥘"
    ],
    motivation: [
      "Remember why you started! Every small step counts. You're stronger than you think! 💪",
      "Progress isn't always visible. Trust the process and keep showing up! 🌟",
      "Bad days don't erase good days. Tomorrow is a fresh start! 🚀"
    ],
    rest: [
      "Rest is when the magic happens! Aim for 7-9 hours of quality sleep. 💤",
      "Recovery days prevent injuries. Listen to your body! 🧘‍♀️",
      "Sleep is as important as your workout. Your muscles grow when you rest! 😴"
    ],
    medical: [
      "I can't give medical advice. Please consult a doctor or certified trainer for health concerns! 👩‍⚕️",
      "For injuries or health conditions, always check with a healthcare professional first! 🏥"
    ]
  },

  getResponse(message: string): string {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi') || lowercaseMessage.includes('hey')) {
      return this.getRandomResponse('greeting');
    }
    
    if (lowercaseMessage.includes('weight') || lowercaseMessage.includes('lose') || lowercaseMessage.includes('fat')) {
      return this.getRandomResponse('weight_loss');
    }
    
    if (lowercaseMessage.includes('muscle') || lowercaseMessage.includes('bulk') || lowercaseMessage.includes('gain') || lowercaseMessage.includes('strong')) {
      return this.getRandomResponse('muscle_building');
    }
    
    if (lowercaseMessage.includes('eat') || lowercaseMessage.includes('food') || lowercaseMessage.includes('diet') || lowercaseMessage.includes('nutrition')) {
      return this.getRandomResponse('nutrition');
    }
    
    if (lowercaseMessage.includes('motivat') || lowercaseMessage.includes('give up') || lowercaseMessage.includes('hard')) {
      return this.getRandomResponse('motivation');
    }
    
    if (lowercaseMessage.includes('sleep') || lowercaseMessage.includes('rest') || lowercaseMessage.includes('recovery')) {
      return this.getRandomResponse('rest');
    }
    
    if (lowercaseMessage.includes('pain') || lowercaseMessage.includes('hurt') || lowercaseMessage.includes('injury') || lowercaseMessage.includes('doctor')) {
      return this.getRandomResponse('medical');
    }
    
    // Default responses for other fitness questions
    const defaultResponses = [
      "Great question! Remember, consistency beats perfection every time! 💪",
      "I love your enthusiasm! Start small and build up gradually. You've got this! 🌟",
      "Every fitness journey is unique. Listen to your body and stay consistent! 🏃‍♀️",
      "That's the spirit! Small daily actions lead to big results. Keep it up! 💪"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  },

  getRandomResponse(category: keyof typeof FitnessBot.responses): string {
    const responses = this.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there, fitness champion! 💪 I'm your friendly fitness assistant. I can help you with workouts, nutrition, motivation, and more. What's your fitness goal today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: FitnessBot.getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-card shadow-fitness">
      {/* Header */}
      <div className="p-4 border-b bg-gradient-primary rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-full">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Fit Friend Bot</h3>
            <p className="text-sm text-white/80">Your fitness companion</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 bg-gradient-chat" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl transition-all duration-300 ${
                  message.isBot
                    ? 'bg-white shadow-sm border text-foreground rounded-bl-sm'
                    : 'bg-gradient-primary text-white rounded-br-sm shadow-glow'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-white/70'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about fitness, workouts, nutrition..."
            className="flex-1 rounded-full border-2 focus:border-primary transition-colors"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatBot;