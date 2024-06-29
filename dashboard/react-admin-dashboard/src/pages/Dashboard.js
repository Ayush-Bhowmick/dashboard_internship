import React from 'react';
import TableComponent from '../components/TableComponent';
import ChartComponent from '../components/ChartComponent';
import CalendarComponent from '../components/CalendarComponent';
import KanbanComponent from '../components/KanbanComponent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="components-container">
        <div className="component table-component">
          <TableComponent />
        </div>
        <div className="component chart-component">
          <ChartComponent />
        </div>
        <div className="component calendar-component">
          <CalendarComponent />
        </div>
        <div className="component kanban-component">
          <KanbanComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
