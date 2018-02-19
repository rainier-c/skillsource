import React from "react";
import Snippet from './snippet.jsx';

const Dashboard = (props) => {
  const courses = [{
          id: 1,
          name: 'Learn Javascript',
          description: 'Learn vanilla javascript in 30 days or less',
          rating: '****' },
          {
          id: 2,
          name: 'Swim like Michael Phelps',
          description: 'Master the techniques perfected by the master of swim.',
          rating: '*****' },
          {
          id: 3,
          name: 'Play the ukelele',
          description: 'Learn how to play the uke through youtube videos, perfectly ordered by level of difficulty.',
          rating: '***' }
        ]

  const snippets = courses.map((course) => {
      return (
        <Snippet
          key={course.id}
          data={course}/>
      )
    });

  return (
    <div className="dashboard">
        <h3>You are enrolled in:</h3>
        {snippets}
    </div>
  );
}

export default Dashboard;