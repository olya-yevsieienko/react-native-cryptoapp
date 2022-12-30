export interface Currensy {
  id: number;
  currency: string;
  code: string;
  image: any;
  amount: string | null;
  changes: string;
  type: string;
  description: string;
  chartData: [
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
    {
      x: number;
      y: number;
    },
  ];
  wallet: {
    value: string;
    crypto: string;
  };
  transactionHistory: [
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
    {
      id: number;
      description: string;
      amount: number;
      currency: string;
      type: string;
      date: string;
    },
  ];
}
