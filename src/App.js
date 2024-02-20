
import { Sidebar, Menu, MenuItem, Submenu } from "react-mui-sidebar";
import { IconAperture , IconShoppingCart,IconCalendar,IconMessageDots,IconCircle,IconDeviceDesktopAnalytics,IconUsers,IconEdit } from '@tabler/icons-react';
import SidebarInfo from "./components/SidebarInfo";
export default function App() {
  return (
    <>
        <Sidebar width={'270px'} collapsewidth="70px" collapsible={false}>
            
           <Menu subHeading="DASHBOARDS" >
               <MenuItem link="/sdsa" badge="true" icon={<IconAperture size={21}/>}>Modern</MenuItem>
               <MenuItem icon={<IconDeviceDesktopAnalytics size={21}/>}>Analytical</MenuItem>
               <MenuItem icon={<IconShoppingCart size={21}/>}>eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="APPLICATIONS">
           <MenuItem icon={<IconMessageDots size={21}/>}>Chat</MenuItem>
           <Submenu icon={<IconUsers  size={21}/>} subBackgroundColor="#434E5F" subTextColor="#5A6A85" title="Users">
             <MenuItem icon={<IconCircle size={7}/>}>Dean</MenuItem>
             <MenuItem icon={<IconCircle size={7}/>}>Marrie</MenuItem>
             <MenuItem icon={<IconCircle size={7}/>}>John</MenuItem>
             <MenuItem icon={<IconCircle size={7}/>}>Salma</MenuItem>
             </Submenu>
           <MenuItem icon={<IconEdit size={21}/>}>Note</MenuItem>
           <MenuItem icon={<IconCalendar size={21}/>}>Calendar</MenuItem>
           <MenuItem icon={<IconAperture size={21}/>} disabled="true">Disabled</MenuItem>
           </Menu>
        </Sidebar>
         <SidebarInfo/>
        </>
  );
}
