
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from './modern-button';

interface SearchBarProps {
  onClose: () => void;
}

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

const searchData: SearchResult[] = [
  { title: "Creator Studio", description: "Build content & mint NFTs", path: "/video-studio", category: "Create" },
  { title: "NeuraSocial", description: "Decentralized social network", path: "/neura-social", category: "Social" },
  { title: "Threaditor", description: "Writing & publishing platform", path: "/threaditor", category: "Create" },
  { title: "DAO Governance", description: "Community decision making", path: "/global-innovators", category: "Govern" },
  { title: "Finance Hub", description: "DeFi & asset management", path: "/finance-hub", category: "Finance" },
  { title: "Developer Hub", description: "APIs & SDK documentation", path: "/video-integration", category: "Build" },
  { title: "Creator Market", description: "Trade digital assets", path: "/video-marketplace", category: "Trade" },
  { title: "Secure Chat", description: "Private messaging", path: "/neurapathy", category: "Communication" },
];

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`}>
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search features, docs, or tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-12 py-3 bg-card/60 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            autoFocus
            aria-label="Search T00 Savvy platform features"
          />
          <ModernButton
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-8 w-8"
            aria-label="Close search"
          >
            <X size={16} />
          </ModernButton>
        </div>

        {/* Search Results */}
        {query.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={onClose}
                    className="block p-3 rounded-lg hover:bg-card/60 transition-colors duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {result.title}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {result.description}
                        </div>
                      </div>
                      <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full ml-2">
                        {result.category}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
