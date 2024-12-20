"use client"
import React, { useState } from 'react';

function UpgradePlans() {
  const [selectedPlan, setSelectedPlan] = useState('unlimited'); // Initially select the Unlimited plan

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="upgrade-plans">
      <h2 className='text-3xl font-bold'>Plans</h2>
      <p className='font-medium'>Update your plans to Add more PDF</p>
      <div className="pricing-container mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <PricingBox
            plan="unlimited"
            isActive={selectedPlan === 'unlimited'}
            onPlanChange={handlePlanChange}
            title="Unlimited"
            price="$9.99 (one time)"
            features={[
              "Unlimited PDF upload",
              "Unlimited Note Taking",
              "Email support",
              "Help center access",
            ]}
            buttonText="Get Started"
            buttonColor="indigo-600" // Default button color for Unlimited plan
            buttonHoverColor="indigo-700" // Hover effect for Unlimited plan button
          />
          <PricingBox
            plan="free"
            isActive={selectedPlan === 'free'}
            onPlanChange={handlePlanChange}
            title="Free"
            price="$0/month"
            features={[
              "5 PDF Upload",
              "Unlimited Note Taking",
              "Email support",
              "Help center access",
            ]}
            buttonText="Get Started"
            buttonColor="gray-200" // Default button color for Free plan
            buttonHoverColor="indigo-200" // Hover effect for Free plan button
          />
        </div>
      </div>
    </div>
  );
}

function PricingBox({ plan, isActive, onPlanChange, title, price, features, buttonText, buttonColor, buttonHoverColor }) {
  const handleBoxClick = () => {
    onPlanChange(plan);
  };

  return (
    <div
      className={`pricing-box rounded-2xl border shadow-sm p-6 hover:scale-105 transition-all duration-500 ${
        isActive ? 'border-indigo-600' : 'border-gray-200'
      } ${isActive ? 'bg-indigo-50' : 'bg-white'}`}
      onClick={handleBoxClick}
    >
      <div className="text-center">
        <h2 className={`text-lg font-medium text-gray-900 ${isActive ? '' : 'text-indigo-600'}`}>
          {title}
          <span className="sr-only">Plan</span>
        </h2>
        <p className="mt-2 sm:mt-4">
          <strong className={`text-3xl font-bold text-gray-900 sm:text-4xl ${isActive ? '' : 'text-indigo-600'}`}>
            {price}
          </strong>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-8 block rounded-full border border-${buttonColor} bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-${buttonHoverColor} focus:outline-none focus:ring active:text-indigo-500`}
      >
        {buttonText}
      </a>
    </div>
  );
}

export default UpgradePlans;