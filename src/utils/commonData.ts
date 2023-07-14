export interface InterestTopicsKeywordType{
    id: number;
    label: string;
    isSelected: boolean;
}
export interface TimeFormatDataType{
    id: number;
    name: string;
}
export interface ThemeDataType{
    id: number;
    name: string;
}
export interface DateFormatDataType{
    id: number;
    name: string;
}
export const interestTopicsKeyword: InterestTopicsKeywordType[] = [
    {id: 1, label: "Artificial Intelligence", isSelected: false},
    {id: 2, label: "Virtual Reality", isSelected: false},
    {id: 3, label: "AR", isSelected: false},
    {id: 4, label: "SaaS", isSelected: false},
    {id: 5, label: "Entertainment", isSelected: false},
    {id: 6, label: "LLM", isSelected: false},
    {id: 7, label: "GPT-3", isSelected: false},
    {id: 8, label: "Music", isSelected: false},
    {id: 9, label: "Netflix", isSelected: false},
    {id: 10, label: "Hollywood", isSelected: false},
]


export const countries: any[] = [
    { name: "India" },
    { name: "U.S" },
    { name: "Canada" },
    { name: "Germany" },
    { name: "Europe" },
    { name: "Turkey" },
  ];

export const timeFormatData: TimeFormatDataType[] = [
    {id: 1, name: "24 hour format"},
    {id: 2, name: "12 hour format"},
]
export const themeData: ThemeDataType[] = [
    {id: 1, name: "Light mode"},
    {id: 2, name: "Dark mode"},
]
export const dateFormatDate: DateFormatDataType[] = [
    {id: 1,  name: "DD/MM/YYYY" },
    {id: 2,  name: "MM/DD/YYYY" },
    {id: 3,  name: "YYYY/MM/DD" },
]

export const workFlowStage =[
    {id: 1, label: 'Initial Call', bgColor: 'bg-red-50' },
    {id: 2, label: 'Property Listing', bgColor: 'bg-orange-50' },
    {id: 3, label: 'Negotiation', bgColor: 'bg-yellow-50' },
    {id: 4, label: 'Follow Up', bgColor: 'bg-cyan-50' },
    {id: 5, label: 'Proposal Communication', bgColor: 'bg-teal-50' },
]


export const timezones = [
    {id: 1,  name: "Asia/Shanghai" },
    {id: 2,  name: "Asia/Chongqing" },
    {id: 3,  name:  'Asia/Hong_Kong' },
]