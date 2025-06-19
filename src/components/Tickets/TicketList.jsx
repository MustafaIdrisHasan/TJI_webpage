import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarker, FaDollarSign } from 'react-icons/fa';
import './TicketList.css';

const TicketList = () => {
  const tickets = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      salary: '$120k - $150k',
      postedDate: '2d ago',
      type: 'Full-time',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    // Add more sample tickets
  ];

  return (
    <div className="tickets-container">
      <div className="tickets-header neomorphic">
        <h2>Job Tickets</h2>
        <div className="tickets-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Remote</button>
          <button className="filter-btn">Full-time</button>
          <button className="filter-btn">Contract</button>
        </div>
      </div>

      <div className="tickets-grid">
        {tickets.map(ticket => (
          <div key={ticket.id} className="ticket-card neomorphic">
            <div className="ticket-header">
              <h3>{ticket.title}</h3>
              <span className="ticket-type">{ticket.type}</span>
            </div>
            
            <div className="ticket-company">
              <FaBriefcase className="ticket-icon" />
              <span>{ticket.company}</span>
            </div>

            <div className="ticket-details">
              <div className="detail-item">
                <FaMapMarker className="ticket-icon" />
                <span>{ticket.location}</span>
              </div>
              <div className="detail-item">
                <FaDollarSign className="ticket-icon" />
                <span>{ticket.salary}</span>
              </div>
              <div className="detail-item">
                <FaCalendar className="ticket-icon" />
                <span>{ticket.postedDate}</span>
              </div>
            </div>

            <div className="ticket-skills">
              {ticket.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>

            <button className="apply-btn neomorphic">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList; 