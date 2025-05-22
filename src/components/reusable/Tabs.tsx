import { useState } from "react";

type Tab = {
    id: number;
    label: string;
    content: string;
  };
  

type TabsProps = {
    tabs: Tab[];
  };
  
  const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
  
    return (
      <div className="w-full max-w-md mx-auto">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
  
        {/* Tab Content */}
        <div className="p-4 bg-white border border-gray-200 rounded-b">
          <p className="text-gray-700">{tabs[activeTab].content}</p>
        </div>
      </div>
    );
  };
  
  export default Tabs;
  