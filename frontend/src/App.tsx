import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import FAQItem from './components/FAQItem';
import LanguageSelector from './components/LanguageSelector';
import { FAQ } from './types/faq';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
            </div>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
          <div className="divide-y divide-gray-200">
            {mockFaqs.map((faq: FAQ) => (
              <FAQItem key={faq.id} faq={faq} language={language} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;