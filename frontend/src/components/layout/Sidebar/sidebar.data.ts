import { CloudSun, FolderKanbanIcon, House, MessageCircle, Users2, Settings2, Icon, User } from "lucide-react";

export const MENU = [
    {
        url: '/',
        Icon: House,
        name: 'Главная',
        id: 1,
        color: 'black',
    },
    {
        url: 'profile',
        Icon: User,
    },
    {
        url: '/weather',
        Icon: CloudSun,
    },
    {
        url: '/planner',
        Icon: FolderKanbanIcon,
    },
    {
        url: '/chats',
        Icon: MessageCircle,
    },
    { 
        url: '/contacts',
        Icon: Users2,
    },
    { 
        url: '/settings',
        Icon: Settings2,
    }
]