
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useWallet } from '@/services/wallet';

interface SearchResult {
  id: string;
  title: string;
  type: string;
  url?: string;
}

export const SearchBar: React.FC = () => {
  const { wallet } = useWallet();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (!value.trim()) {
      setResults([]);
      return;
    }
    
    // Search through various data sources
    const searchResults: SearchResult[] = [];
    
    // Search tokens
    wallet.tokens.forEach(token => {
      if (token.name.toLowerCase().includes(value.toLowerCase()) || 
          token.symbol.toLowerCase().includes(value.toLowerCase())) {
        searchResults.push({
          id: token.address,
          title: `${token.name} (${token.symbol})`,
          type: 'token'
        });
      }
    });
    
    // Search vaults
    wallet.vaults.forEach(vault => {
      if (vault.name.toLowerCase().includes(value.toLowerCase())) {
        searchResults.push({
          id: vault.id,
          title: vault.name,
          type: 'vault'
        });
      }
    });
    
    // Search service items
    wallet.serviceItems.forEach(service => {
      if (service.title.toLowerCase().includes(value.toLowerCase()) ||
          service.category.toLowerCase().includes(value.toLowerCase())) {
        searchResults.push({
          id: service.id,
          title: service.title,
          type: 'service'
        });
      }
    });
    
    // Search impact projects
    wallet.impactProjects.forEach(project => {
      if (project.title.toLowerCase().includes(value.toLowerCase()) ||
          project.description.toLowerCase().includes(value.toLowerCase())) {
        searchResults.push({
          id: project.id,
          title: project.title,
          type: 'project'
        });
      }
    });
    
    setResults(searchResults.slice(0, 10)); // Limit to 10 results
  };
  
  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };
  
  const handleResultClick = (result: SearchResult) => {
    // In a real app, we would navigate to the relevant page
    console.log('Selected result:', result);
    setOpen(false); // Close the dialog
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'token': return '💰';
      case 'vault': return '🏦';
      case 'service': return '🛠️';
      case 'project': return '📋';
      default: return '📄';
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-9 bg-neura-dark/80 border-neura-purple/20 hover:bg-neura-purple/20 gap-1.5"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search...</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neura-dark/95 border-neura-purple/30 p-0">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-white/50" />
          <Input
            placeholder="Search tokens, vaults, services..."
            value={query}
            onChange={handleSearch}
            className="pl-10 pr-10 py-6 bg-transparent border-0 border-b border-white/10 rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className="absolute right-2 top-2.5"
            >
              <X className="h-5 w-5 text-white/50" />
            </Button>
          )}
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="px-4 py-2 hover:bg-neura-purple/20 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getTypeIcon(result.type)}</span>
                    <div>
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-white/60 capitalize">{result.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="p-4 text-center text-white/50">No results found</div>
          ) : (
            <div className="p-4 text-center text-white/50">Type to search</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
