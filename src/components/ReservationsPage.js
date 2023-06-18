import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.<em>Lorem</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage