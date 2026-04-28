import { Users, LayoutTemplate, PenTool, MessageSquare, PieChart, Image as ImageIcon } from 'lucide-react';

const features = [
  {
    title: "PersonaGen AI",
    description: "Creates dynamic user profiles based on interests, behavior, and interaction history. Helps personalize ads for different customer segments.",
    icon: <Users size={24} />
  },
  {
    title: "CampaignMorph",
    description: "Customizes and adapts entire marketing campaigns based on PersonaGen data. Automatically modifies tone, content, and timing.",
    icon: <LayoutTemplate size={24} />
  },
  {
    title: "CopyCrafter GPT",
    description: "AI copywriter that generates high-performing text for ads across platforms like Google, Instagram, Facebook, and LinkedIn.",
    icon: <PenTool size={24} />
  },
  {
    title: "QR Bot",
    description: "Customer support bot that answers product-related queries. Reduces customer service costs and improves user experience.",
    icon: <MessageSquare size={24} />
  },
  {
    title: "SmartBudgetor",
    description: "AI tool that recommends ad spend distribution based on past performance. Maximizes ROI by allocating budget smartly.",
    icon: <PieChart size={24} />
  },
  {
    title: "AI Image Generator",
    description: "Creates AI-generated marketing visuals like banners, product ads, and social media images. Helps non-designers produce professional graphics.",
    icon: <ImageIcon size={24} />
  }
];

const Features = () => {
  return (
    <section id="features" className="section container">
      <div className="section-header">
        <span className="section-badge">Platform Capabilities</span>
        <h2 className="section-title">A Full-Stack Solution for <br /><span className="text-accent">Modern Marketing</span></h2>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
