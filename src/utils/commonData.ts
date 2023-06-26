export interface InterestTopicsKeywordType{
    id: number;
    label: string;
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
    {id: 1, label: "Artificial Intelligence"},
    {id: 2, label: "Virtual Reality"},
    {id: 3, label: "AR"},
    {id: 4, label: "SaaS"},
    {id: 5, label: "Entertainment"},
    {id: 6, label: "LLM"},
    {id: 7, label: "GPT-3"},
    {id: 8, label: "Music"},
    {id: 9, label: "Netflix"},
    {id: 10, label: "Hollywood"},
]

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
