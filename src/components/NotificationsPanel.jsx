import {useEffect} from "react";
import {FiX} from "react-icons/fi";
import Notifications from "../pages/Notifications";   // your existing list
import { useNotifications } from "../context/NotificationContext";
import "./NotificationsPanel.css";

export default function NotificationsPanel({open, onClose}){
  const { markAllAsRead } = useNotifications();

  useEffect(()=>{
    if(open){
      // Auto-mark all as read when drawer opens
      markAllAsRead();

      const l = e => e.key === "Escape" && onClose();
      window.addEventListener("keydown", l);
      return () => window.removeEventListener("keydown", l);
    }
  },[open, onClose, markAllAsRead]);

  if(!open) return null;

  return(
    <div className="notif-overlay">
      <div className="notif-backdrop" onClick={onClose}/>
      <aside className="notif-panel">
        <button className="notif-close" onClick={onClose}><FiX/></button>
        <Notifications />
      </aside>
    </div>
  );
} 