import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import BackButton from "../BackButton";
import Cookies from "js-cookie";
import {
  getFeedback,
  getRevenue,
  sockets,
} from "../../../redux/actions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LogoutButton from "../Navbar/LogoutButton";

const Analytics = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const tokenAdmin = Cookies.get("token-admin");
  const revenue = useSelector((state) => state.revenue);
  const feedback = useSelector((state) => state.feedback);

  let monthlyRevenue = 0;
  let weeklyRevenue = 0;
  let dailyRevenue = 0;
  let monthlyOrders = 0;
  let weeklyOrders = 0;
  let dailyOrders = 0;
  let feedbacksCounter = [0, 0, 0, 0, 0];
  let revenueCounter = [0, 0, 0, 0];
  let feedbackSum = 0;

  for (var i = 0; i < revenue.monthly.length; i++) {
    monthlyRevenue += Number(revenue.monthly[i].totalPrice);
    monthlyOrders += revenue.monthly[i].SoldProducts.length;
    if (revenue.monthly[i].totalPrice < 100) {
      revenueCounter[0]++;
    }
    if (
      revenue.monthly[i].totalPrice >= 100 &&
      revenue.monthly[i].totalPrice < 500
    ) {
      revenueCounter[1]++;
    }
    if (
      revenue.monthly[i].totalPrice >= 500 &&
      revenue.monthly[i].totalPrice < 1000
    ) {
      revenueCounter[2]++;
    }
    if (revenue.monthly[i].totalPrice >= 1000) {
      revenueCounter[3]++;
    }
  }

  for (var j = 0; j < revenue.daily.length; j++) {
    dailyRevenue += Number(revenue.daily[j].totalPrice);
    dailyOrders += revenue.daily[j].SoldProducts.length;
  }
  
  for (var l = 0; l < revenue.weekly.length; l++) {
    weeklyRevenue += Number(revenue.weekly[l].totalPrice);
    weeklyOrders += revenue.weekly[l].SoldProducts.length;
  }
  for (var k = 0; k < feedback.length; k++) {
    feedbacksCounter[feedback[k].rating - 1]++;
    feedbackSum += feedback[k].rating;
  }

  let feedbackAvg = (feedbackSum / feedback.length).toFixed(2);

  ChartJS.register(ArcElement, Tooltip, Legend);
  const feedbackData = {
    labels: [" 1 Star", " 2 Stars", " 3 Stars", " 4 Stars", " 5 Stars"],
    datasets: [
      {
        label: "My First Dataset",
        data: feedbacksCounter,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(235, 150, 86)",
          "rgb(205, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const revenueData = {
    labels: ["$0 - $100", "$100 - $500", "$500 - $1000", " +$1000"],
    datasets: [
      {
        label: "My First Dataset",
        data: revenueCounter,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(235, 150, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    sockets.joinResto(idResto);
    dispatch(getRevenue(idResto, "Daily", tokenAdmin));
    dispatch(getRevenue(idResto, "Monthly", tokenAdmin));
    dispatch(getRevenue(idResto, "Weekly", tokenAdmin));
    dispatch(getFeedback(idResto, tokenAdmin));
    sockets.staffListen(() => {
      dispatch(getRevenue(idResto, "Daily", tokenAdmin));
      dispatch(getRevenue(idResto, "Monthly", tokenAdmin));
      dispatch(getRevenue(idResto, "Weekly", tokenAdmin));
      dispatch(getFeedback(idResto, tokenAdmin));
    });
  }, [dispatch, idResto, tokenAdmin]);

  return (
    <Fragment>
      <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
        <BackButton />
        <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32">
          <h1>Analytics</h1>
        </div>
        <LogoutButton/>
      </nav>

      <div className="container w-full mx-auto">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          {/* <!--divs--> */}

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Revenue--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-green-600">
                      <img
                        src="https://img.icons8.com/windows/50/000000/bank.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Monthly Revenue
                    </h5>
                    <h3 className="font-bold text-3xl">${monthlyRevenue}</h3>
                  </div>
                  <span className="float-left">
                    <img
                      src="https://img.icons8.com/material-rounded/48/48bb78/sort-up.png"
                      width="50"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Revenue--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-green-600">
                      <img
                        src="https://img.icons8.com/windows/50/000000/bank.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Weekly Revenue
                    </h5>
                    <h3 className="font-bold text-3xl">${weeklyRevenue}</h3>
                  </div>
                  <span className="float-left">
                    <img
                      src="https://img.icons8.com/material-rounded/48/48bb78/sort-up.png"
                      width="50"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Revenue--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-green-600">
                      <img
                        src="https://img.icons8.com/windows/50/000000/bank.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Daily Revenue
                    </h5>
                    <h3 className="font-bold text-3xl">${dailyRevenue}</h3>
                  </div>
                  <span className="float-left">
                    <img
                      src="https://img.icons8.com/material-rounded/48/48bb78/sort-up.png"
                      width="50"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Users per month--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-pink-600">
                      <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Total Users last Month
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {revenue.monthly.length}{" "}
                      <span className="text-pink-500"></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Users per week--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-pink-600">
                      <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Total Users last Week
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {revenue.weekly.length}{" "}
                      <span className="text-pink-500"></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Users per day--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-yellow-600">
                      <img
                        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-advertising-kiranshastry-lineal-kiranshastry-6.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Users today
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {revenue.daily.length}{" "}
                      <span className="text-yellow-600"></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Orders per month--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-blue-600">
                      <img
                        src="https://img.icons8.com/ios/50/000000/order-history.png"
                        width="45"
                        alt=""
                      />
                      {/* <img src="https://img.icons8.com/ios-glyphs/30/f56565/sort-down.png"/> */}{" "}
                      {/* down btn */}
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Orders per Month
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {monthlyOrders} Orders
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Orders per month--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-blue-600">
                      <img
                        src="https://img.icons8.com/ios/50/000000/order-history.png"
                        width="45"
                        alt=""
                      />
                      {/* <img src="https://img.icons8.com/ios-glyphs/30/f56565/sort-down.png"/> */}{" "}
                      {/* down btn */}
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Orders per Week
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {weeklyOrders} Orders
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Orders per day--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-indigo-600">
                      <img
                        src="https://img.icons8.com/ios/50/000000/create-order--v1.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Orders Today
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {dailyOrders}
                      {dailyOrders === 1 ? " Order" : " Orders"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              <Link to="feedbacks">
              {/* <!--Feedback--> */}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-1 bg-red-600">
                      <img
                        src="https://img.icons8.com/ios/50/000000/feedback.png"
                        width="45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Feedbacks&nbsp;&nbsp;-&nbsp;&nbsp;Rating Average
                    </h5>
                    <h3 className="font-bold text-3xl">
                      {feedback.length} - {feedbackAvg}<span className="text-red-500"></span>
                    </h3>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mb-10 md:flex-row content-center">
        <div className="w-10/12 m-auto md:w-1/3 xl:w-1/3 flex-shrink-0 ml-auto  md:mr-12 xl:mr-20">
          <h5 className="font-bold uppercase text-gray-500">Feedback Data</h5>
          <Doughnut data={feedbackData} />
        </div>
        <div className=" w-10/12 m-auto md:w-1/3 xl:w-1/3 flex-shrink-0 mr-auto md:ml-12 xl:ml-20">
          <h5 className="font-bold uppercase text-gray-500">Revenue Data</h5>
          <Doughnut data={revenueData} />
        </div>
      </div>

      {/* Charts */}

      {/* <div className='ml-96'>
             <img src="https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png" className='ml-40' width="700" alt="" />
            </div> */}
    </Fragment>
  );
};

export default Analytics;
