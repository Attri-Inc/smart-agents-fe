export interface TrendingTopicsType {
    summary: string;
    link: string;
  }
  export interface TrendingTopicsProps {
    trendingList: TrendingTopicsType[];
    label: string;
  }
  
  export interface CountryType {
    id: number;
    name: string;
    countryCode: string;
  }