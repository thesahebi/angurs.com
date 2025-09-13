import { Bird, DollarSign, Package } from 'lucide-react';

const PricingCard = () => {
  const plans = [
    {
      name: 'Basic',
      icon: <Bird className="w-12 h-12 mx-auto mb-4"/>,
      price: '$400',
      features: [
        'Domain Name',
        'Basic Hosting',
        'Basic Pages',
        'Free Email',
        '1 Week Support'
      ],
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    },
    {
      name: 'Premium',
      icon: <Package className="w-12 h-12 mx-auto mb-4 text-white"/>,
      price: '$600',
      features: [
        'Domain Name',
        'Premium Hosting',
        'Stunning Pages',
        'Basic Shop',
        '2 Months Support',
        'Free Email'
      ],
      bgColor: 'bg-gray-900',
      textColor: 'text-white'
    },
    {
      name: 'Gold',
      icon: <DollarSign className="w-12 h-12 mx-auto mb-4"/>,
      price: '$1500',
      features: [
        'Domain Name',
        'Premium Hosting',
        'Stunning Pages',
        'Shop & Payment',
        '3 Months Support',
        'Free Email'
      ],
      bgColor: 'bg-white',
      textColor: 'text-gray-900'
    }
  ];

 

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 dark:bg-black:">
      {/* Cards View (Mobile) */}
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8 md:mb-12 md:mb-20 ">
        {plans.map((plan, index) => (
          <div key={index} className={`${plan.bgColor} rounded-2xl shadow-xl p-8`}>
            <div className={`${plan.textColor}`}>
              {plan.icon}
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 md:mb-12 text-dark">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 ubun-text" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg ${plan.name === 'Premium' ? 'bg-ubun text-white' : 'bg-blue-100 ubun-text'} font-medium transition-colors duration-200`}>
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default PricingCard;