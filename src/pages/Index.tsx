import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dumbbell, Heart, Target, Zap } from 'lucide-react';
import fitnessHero from '@/assets/fitness-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-chat">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fitnessHero}
            alt="People exercising in a modern gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Dumbbell className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Fitness Journey
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Meet your AI fitness companion! Get personalized workout advice, nutrition tips, 
              and the motivation you need to achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-glow font-semibold px-8 py-3"
              >
                Start Chatting Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What I Can Help You With
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From beginner tips to advanced strategies, I'm here to support your fitness journey every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-fitness transition-all duration-300 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Workout Plans</h3>
              <p className="text-muted-foreground">Personalized exercise routines for all fitness levels</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-fitness transition-all duration-300 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Nutrition Advice</h3>
              <p className="text-muted-foreground">Healthy eating tips and meal suggestions</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-fitness transition-all duration-300 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Motivation</h3>
              <p className="text-muted-foreground">Daily encouragement to keep you on track</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-fitness transition-all duration-300 border-2 hover:border-primary/20">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Form Tips</h3>
              <p className="text-muted-foreground">Proper technique guidance for safe workouts</p>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Try It Now!
              </h2>
              <p className="text-lg text-muted-foreground">
                Ask me anything about fitness, nutrition, or motivation. I'm here to help! 💪
              </p>
            </div>
            
            <ChatBot />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Fit Friend Bot</h3>
          <p className="text-white/80">Your 24/7 fitness companion, always ready to help you succeed!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;