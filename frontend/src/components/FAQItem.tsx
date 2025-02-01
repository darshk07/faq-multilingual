import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types/faq';

interface FAQItemProps {
  faq: FAQ;
  language: string;
}

const FAQItem = ({ faq, language }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getTranslatedContent = () => {
    if (language === 'en') {
      return { question: faq.question, answer: faq.answer };
    }
    return faq.translations[language] || { question: faq.question, answer: faq.answer };
  };

  const { question, answer } = getTranslatedContent();

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 text-left">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div 
          className="px-4 pb-6 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

export default FAQItem;