import React from "react";

const DashboardPage = () => {
  return (
    <>
      {/* ======================= Cards ================== */}
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="iconBx">
            <ion-icon name="eye-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">80</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cart-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>
          <div className="iconBx">
            <ion-icon name="chatbubbles-outline" />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">$7,842</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cash-outline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
