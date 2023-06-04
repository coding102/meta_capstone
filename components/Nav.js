import './BookingPage';

export default function Nav() {
     return (
          <div className="main-grid">
               <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
               </Routes>
          </div>
     )
}