import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import FAQItem from './components/FAQItem';
import LanguageSelector from './components/LanguageSelector';
import { FAQ } from './types/faq';

// This would normally come from your API
const mockFaqs: FAQ[] = [
  {
    id: 1,
    question: "What is a WYSIWYG editor?",
    answer: "A WYSIWYG (What You See Is What You Get) editor is a type of editing interface that allows you to directly manipulate the appearance of text as you type it.",
    translations: {
      hi: {
        question: "WYSIWYG एडिटर क्या है?",
        answer: "WYSIWYG (वाट यू सी इज वाट यू गेट) एडिटर एक प्रकार का एडिटिंग इंटरफ़ेस है जो आपको टाइप करते समय टेक्स्ट की उपस्थिति को सीधे संशोधित करने की अनुमति देता है।"
      },
      bn: {
        question: "WYSIWYG এডিটর কি?",
        answer: "একটি WYSIWYG (What You See Is What You Get) এডিটর হল একটি ধরনের সম্পাদনা ইন্টারফেস যা আপনাকে টাইপ করার সময় টেক্সটের চেহারা সরাসরি পরিবর্তন করতে দেয়।"
      }
    }
  },
  {
    id: 2,
    question: "How do I change the language of the FAQs?",
    answer: "You can change the language by using the language selector in the top-right corner of the page. We currently support English, Hindi, and Bengali.",
    translations: {
      hi: {
        question: "मैं FAQ की भाषा कैसे बदलूं?",
        answer: "आप पेज के ऊपरी-दाएं कोने में स्थित भाषा चयनकर्ता का उपयोग करके भाषा बदल सकते हैं। हम वर्तमान में अंग्रेजी, हिंदी और बंगाली का समर्थन करते हैं।"
      },
      bn: {
        question: "আমি কিভাবে FAQ-এর ভাষা পরিবর্তন করব?",
        answer: "আপনি পৃষ্ঠার উপরের-ডান কোণে ভাষা নির্বাচক ব্যবহার করে ভাষা পরিবর্তন করতে পারেন। আমরা বর্তমানে ইংরেজি, হিন্দি এবং বাংলা সমর্থন করি।"
      }
    }
  }
];

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
            {mockFaqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} language={language} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;