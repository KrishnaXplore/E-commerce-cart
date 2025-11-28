import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import gamingMouseImage from "@/assets/gaming-mouse.jpg";

export const ProductCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleBuyNow = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    // Handle form submission
  };

  return (
    <Card className="w-full max-w-md overflow-hidden border-border/50 bg-card backdrop-blur-sm">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background to-secondary">
        <img
          src={gamingMouseImage}
          alt="Gaming Mouse"
          className="h-full w-full object-cover transition-smooth hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Gaming Mouse</h2>
          <p className="text-muted-foreground text-sm">
            Professional RGB gaming mouse with precision sensor
          </p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary glow-text">$50</span>
          <span className="text-sm text-muted-foreground line-through">$79.99</span>
        </div>

        {!showForm ? (
          <Button 
            variant="gaming" 
            size="lg" 
            className="w-full"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary transition-smooth"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary transition-smooth"
              />
            </div>

            <Button 
              type="submit" 
              variant="gaming" 
              size="lg" 
              className="w-full"
            >
              Submit Order
            </Button>
          </form>
        )}
      </div>
    </Card>
  );
};
