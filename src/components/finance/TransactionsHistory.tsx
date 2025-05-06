
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useWallet } from '@/services/wallet';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Download, FileDown, FileText, FileJson } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export const TransactionsHistory: React.FC = () => {
  const { wallet, exportTransactionData } = useWallet();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  const filteredTransactions = wallet.transactionHistory.filter((tx) => {
    // Apply transaction type filter
    if (filter !== 'all' && tx.type !== filter) {
      return false;
    }
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      return (
        tx.currency.toLowerCase().includes(searchLower) ||
        tx.from.toLowerCase().includes(searchLower) ||
        tx.to.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });
  
  const handleExport = (format: 'csv' | 'json' | 'pdf') => {
    exportTransactionData(format);
  };

  return (
    <Card className="bg-neura-dark/80 border-neura-purple/20">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-lg">Transaction History</CardTitle>
          <CardDescription>Recent transactions on your wallet</CardDescription>
        </div>
        
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <Input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full sm:w-48 lg:w-64 bg-neura-dark/50 border-neura-purple/20"
          />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-9 bg-neura-dark/50 border-neura-purple/20"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleExport('csv')}>
                <FileText className="h-4 w-4 mr-2" />
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('json')}>
                <FileJson className="h-4 w-4 mr-2" />
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('pdf')}>
                <FileDown className="h-4 w-4 mr-2" />
                Export as PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="all" onValueChange={setFilter}>
          <TabsList className="bg-neura-dark/40 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="send">Sent</TabsTrigger>
            <TabsTrigger value="receive">Received</TabsTrigger>
            <TabsTrigger value="swap">Swaps</TabsTrigger>
          </TabsList>
        
          <TabsContent value={filter}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white/60 text-sm">
                    <th className="p-2 pl-0 font-medium">Type</th>
                    <th className="p-2 font-medium">Amount</th>
                    <th className="p-2 font-medium">Date</th>
                    <th className="p-2 font-medium hidden md:table-cell">From</th>
                    <th className="p-2 font-medium hidden md:table-cell">To</th>
                    <th className="p-2 pr-0 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-6 text-center text-white/60">
                        No transactions found
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-neura-purple/5">
                        <td className="p-2 pl-0 align-middle">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-full ${
                              transaction.type === 'send' ? 'bg-red-500/10' : 
                              transaction.type === 'receive' ? 'bg-green-500/10' : 
                              'bg-blue-500/10'
                            }`}>
                              {transaction.type === 'send' ? (
                                <ArrowUpRight className={`h-4 w-4 text-red-500`} />
                              ) : transaction.type === 'receive' ? (
                                <ArrowDownLeft className={`h-4 w-4 text-green-500`} />
                              ) : (
                                <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 4L20 7L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M7 20L4 17L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M20 7H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M4 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                            <span className="capitalize text-sm">{transaction.type}</span>
                          </div>
                        </td>
                        <td className="p-2 align-middle">
                          <div className="font-medium text-sm flex items-center gap-1">
                            {transaction.type === 'send' ? '−' : '+'}{transaction.amount}
                            <span className="text-white/70">{transaction.currency}</span>
                          </div>
                        </td>
                        <td className="p-2 align-middle">
                          <span className="text-sm text-white/70">{formatDate(transaction.timestamp)}</span>
                        </td>
                        <td className="p-2 align-middle hidden md:table-cell">
                          <span className="text-sm text-white/70">{transaction.from.slice(0, 6)}...{transaction.from.slice(-4)}</span>
                        </td>
                        <td className="p-2 align-middle hidden md:table-cell">
                          <span className="text-sm text-white/70">{transaction.to.slice(0, 6)}...{transaction.to.slice(-4)}</span>
                        </td>
                        <td className="p-2 pr-0 align-middle text-right">
                          <Badge className={`
                            ${transaction.status === 'confirmed' ? 'bg-green-500/20 text-green-500 border-green-500/30' : 
                              transaction.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' : 
                              'bg-red-500/20 text-red-500 border-red-500/30'}
                          `}>
                            {transaction.status === 'confirmed' ? 'Completed' : 
                             transaction.status === 'pending' ? 'Pending' : 'Failed'}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
