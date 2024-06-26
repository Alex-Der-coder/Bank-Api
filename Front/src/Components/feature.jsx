import React from 'react';
import IconChat from '../img/icon-chat.png'
import IconMoney from '../img/icon-money.png'
import IconSecurity from '../img/icon-security.png'


const features = [
  {
    icon: IconChat,
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: IconMoney,
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: IconSecurity,
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.icon} alt="Icon" className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
